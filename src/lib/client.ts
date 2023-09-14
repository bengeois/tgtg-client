import got, { Got, RequestError } from 'got';
import { get, has } from 'lodash';
import { CookieJar } from 'tough-cookie';
import { TgtgClientOptions } from '../types';
import { TgtgClientCredentials } from '../types/interfaces/tgtg-client-credentials.interface';
import { TgtgClientItemsFilters } from '../types/interfaces/tgtg-client-item-filters.interface';
import { TgtgClientItemResult } from '../types/interfaces/tgtg-client-item-result.interface';
import { TgtgConfig } from './config/tgtg-config';

/**
 * Client to interact with the TooGoodToGo API.
 *
 * ### Overview
 *
 * The TooGoodToGo API client allows you to communicate with the TooGoodToGo API, enabling you to access and manipulate data from the platform.
 *
 */
export class TgtgClient {
  private got: Got;
  private readonly email: string | null;
  private accessToken: string | null;
  private refreshToken: string | null;
  private accessTokenTtl: number;
  private userId: string | null;
  private lastTimeTokenRefreshed: number | null;

  constructor(options: TgtgClientOptions) {
    this.email = options.email || null;
    this.accessToken = null;
    this.refreshToken = null;
    this.userId = null;
    this.lastTimeTokenRefreshed = null;
    this.accessTokenTtl = 0;
    this.got = got.extend({
      prefixUrl: TgtgConfig.baseUrl,
      cookieJar: new CookieJar(),
      headers: {
        'User-Agent': TgtgConfig.userAgent,
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json',
        'Accept-Language': 'en-US',
        'Accept-Encoding': 'gzip',
      },
      responseType: 'json',
      // resolveBodyOnly: true,
      retry: {
        limit: 2,
        methods: ['GET', 'POST', 'PUT', 'HEAD', 'DELETE', 'OPTIONS', 'TRACE'],
        statusCodes: [401, 403, 408, 413, 429, 500, 502, 503, 504, 521, 522, 524],
      },
    });
  }

  /**
   * Refresh the access token if needed.
   * @private
   */
  private async _refreshToken(): Promise<void> {
    if (this.lastTimeTokenRefreshed && Date.now() - this.lastTimeTokenRefreshed <= this.accessTokenTtl) {
      return;
    }

    let response;

    try {
      response = await this.got.post(TgtgConfig.refresh, {
        json: {
          refresh_token: this.refreshToken,
        },
      });
    } catch (err: unknown) {
      throw new Error('There was an error during token refreshing request : ' + (err as RequestError).message);
    }

    if (
      !has(response.body, 'access_token') ||
      !has(response.body, 'refresh_token') ||
      !has(response.body, 'access_token_ttl_seconds')
    )
      throw new Error(
        'There was an error during token refreshing, no access_token, refresh_token or access_token_ttl_seconds received.',
      );

    this.setCredentials(
      get<unknown, string>(response.body, 'access_token'),
      get<unknown, string>(response.body, 'refresh_token'),
      this.userId!,
      get<unknown, string>(response.body, 'access_token_ttl_seconds'),
    );
  }

  /**
   * Check if user is logged in and refresh token if needed.
   * @private
   */
  private async _checkLogin(): Promise<void> {
    if (!this.accessToken || !this.userId)
      throw new Error('Please sign in first with requestLoginByEmail() and authenticate().');

    return await this._refreshToken();
  }

  /**
   * Initiate a connection using email.
   *
   * @returns {Promise<string>} Returns a polling_id that should be used to call the authenticate method.
   * @throws {Error} Throws an error if no email is provided or if there was an error during authentication.
   *
   * @example
   * const pollingId = await tgtgClient.requestLoginByEmail();
   */
  async requestLoginByEmail(): Promise<string> {
    if (!this.email) {
      throw new Error('You must provide an email.');
    }

    let response;

    try {
      response = await this.got.post(TgtgConfig.authByEmail, {
        json: {
          device_type: 'IOS',
          email: this.email,
        },
      });
    } catch (err: unknown) {
      throw new Error('There was an error during authentification request: ' + (err as RequestError).message);
    }

    if (!has(response.body, 'polling_id'))
      throw new Error('There was an error during authentification request: no polling_id received.');

    return get<unknown, string>(response.body, 'polling_id');
  }

  /**
   * Authenticate to TooGoodToGo API using the provided polling ID.
   *
   * @param {string} pollingId - The polling ID obtained from requestLoginByEmail().
   * @returns {Promise<void>} Resolves when authentication is successful.
   * @throws {Error} Throws an error if there was an error during authentication.
   *
   * @example
   * await tgtgClient.authenticate(pollingId);
   */
  async authenticate(pollingId: string): Promise<void> {
    let response;

    try {
      response = await this.got.post(TgtgConfig.authPolling, {
        json: {
          device_type: 'IOS',
          email: this.email,
          request_polling_id: pollingId,
        },
      });
    } catch (err: unknown) {
      throw new Error('There was an error during authentification: ' + (err as RequestError).message);
    }

    if (
      !has(response.body, 'access_token') ||
      !has(response.body, 'refresh_token') ||
      !has(response.body, 'startup_data.user.user_id') ||
      !has(response.body, 'access_token_ttl_seconds')
    )
      throw new Error(
        'There was an error during authentification, no access_token, refresh_token, access_token_ttl_seconds or user_id received.',
      );

    this.setCredentials(
      get<unknown, string>(response.body, 'access_token'),
      get<unknown, string>(response.body, 'refresh_token'),
      get<unknown, string>(response.body, 'startup_data.user.user_id'),
      get<unknown, string>(response.body, 'access_token_ttl_seconds'),
    );
  }

  /**
   * Get credentials of your account.
   *
   * @returns {TgtgClientCredentials} Returns the credentials of your account.
   *
   * @example
   * const credentials = tgtgClient.getCredentials();
   * console.log(credentials.accessToken, credentials.refreshToken, credentials.userId);
   */
  getCredentials(): TgtgClientCredentials {
    return {
      accessToken: this.accessToken,
      refreshToken: this.refreshToken,
      userId: this.userId,
      accessTokenTtl: this.accessTokenTtl,
    };
  }

  /**
   * Set credentials of your account.
   *
   * @param {string} accessToken - The access token.
   * @param {string} refreshToken - The refresh token.
   * @param {string} userId - The user ID.
   * @param {number} [ttl] - The access token time to live (in seconds).
   *
   * @returns {void}
   *
   * @example
   * tgtgClient.setCredentials(accessToken, refreshToken, userId, accessTokenTtl);
   */
  setCredentials(accessToken: string, refreshToken: string, userId: string, ttl?: number): void {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    this.userId = userId;
    this.accessTokenTtl = ttl || 0;
    this.lastTimeTokenRefreshed = Date.now();
  }

  /**
   * Get your favorite businesses.
   *
   * @param {number} [size] - The number of items to retrieve per page.
   * @param {number} [page] - The page number.
   * @returns {Promise<TgtgClientItemResult[]>} Your favorite businesses.
   * @throws {Error} Throws an error if there was an error while fetching items.
   *
   * @example
   * const favorites = await tgtgClient.getFavorites();
   */
  async getFavorites(size?: number, page?: number): Promise<TgtgClientItemResult[]> {
    await this._checkLogin();

    return await this.getItems({ favorites_only: true, page_size: size, page: page });
  }

  /**
   * Get items based on specified filters.
   *
   * @param {TgtgClientItemsFilters} filters - Filters to apply.
   * @returns {Promise<TgtgClientItemResult[]>} Items matching the filters.
   * @throws {Error} Throws an error if there was an error while fetching items.
   *
   * @example
   * const items = await tgtgClient.getItems({ favorites_only: true, page_size: 10, page: 1 });
   */
  async getItems(filters: TgtgClientItemsFilters): Promise<TgtgClientItemResult[]> {
    let response;
    await this._checkLogin();

    const requestData = {
      user_id: this.userId,
      origin: filters.origin || { latitude: 0.0, longitude: 0.0 },
      radius: filters.radius ?? 20,
      page_size: filters.page_size ?? 20,
      page: filters.page ?? 1,
      discover: filters.discover || false,
      favorites_only: filters.favorites_only || false,
      item_categories: filters.item_categories || [],
      diet_categories: filters.diet_categories || [],
      search_phrase: filters.search_phrase || '',
      with_stock_only: filters.with_stock_only || false,
      hidden_only: filters.hidden_only || false,
      we_care_only: filters.we_care_only || false,
    };

    try {
      response = await this.got.post(TgtgConfig.items, {
        json: requestData,
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      });
    } catch (err: unknown) {
      throw new Error('There was an error while fetching items: ' + (err as RequestError).message);
    }

    if (!has(response.body, 'items')) throw new Error('There was an error while fetching items: no items received.');

    return get<unknown, string>(response.body, 'items') as TgtgClientItemResult[];
  }
}
