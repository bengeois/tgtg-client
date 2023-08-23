import got, { Got, RequestError } from 'got';
import { get, has, pick } from 'lodash';
import { TgtgClientOptions } from '../types';
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
  private email: string | null;
  private accessToken: string | null;
  private refreshToken: string | null;
  private userId: string | null;

  constructor(options: TgtgClientOptions) {
    this.email = options.email || null;
    this.accessToken = null;
    this.refreshToken = null;
    this.userId = null;
    this.got = got.extend({
      prefixUrl: TgtgConfig.baseUrl,
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
   * Initiate a connection.
   *
   * @returns {Promise<string>} Returns a polling_id that should be use to call authenticate method with.
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
      throw new Error('There was an error during authentification request : ' + (err as RequestError).message);
    }

    if (!has(response.body, 'polling_id'))
      throw new Error('There was an error during authentification request: no polling_id received.');

    return get<unknown, string>(response.body, 'polling_id');
  }

  /**
   * Authenticate to TooGoodToGo API.
   *
   * @returns {Promise<void>} Returns a polling_id that should be use to call authenticate method with.
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
      throw new Error('There was an error during authentification : ' + (err as RequestError).message);
    }

    if (
      !has(response.body, 'access_token') ||
      !has(response.body, 'refresh_token') ||
      !has(response.body, 'startup_data.user.user_id')
    )
      throw new Error(
        'There was an error during authentification, no access_token, refresh_token or user_id received.',
      );

    this.accessToken = get<unknown, string>(response.body, 'access_token');
    this.refreshToken = get<unknown, string>(response.body, 'refresh_token');
    this.userId = get<unknown, string>(response.body, 'startup_data.user.user_id');
  }

  getCredentials(): any {
    return pick(this, ['email', 'accessToken', 'refreshToken', 'userId']);
  }

  setCredentials(email: string, accessToken: string, refreshToken: string, userId: string): void {
    this.email = email;
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    this.userId = userId;
  }
}
