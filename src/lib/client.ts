import { TgtgClientOptions } from '../types';
import got, { Got } from 'got';
import { get, has } from 'lodash';
import { TgtgApiConfig } from './tgtg-endpoints';

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
      prefixUrl: TgtgApiConfig.baseUrl,
      headers: {
        'User-Agent': TgtgApiConfig.userAgent,
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json',
        'Accept-Language': 'en-US',
        'Accept-Encoding': 'gzip',
      },
      responseType: 'json',
      resolveBodyOnly: true,
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

    const body = await this.got.post(TgtgApiConfig.authByEmail, {
      json: {
        device_type: 'IOS',
        email: this.email,
      },
    });

    if (!has(body, 'polling_id')) throw new Error('There was an error during authentification request, please retry.');

    return get<unknown, string>(body, 'polling_id');
  }

  /**
   * Authenticate to TooGoodToGo API.
   *
   * @returns {Promise<void>} Returns a polling_id that should be use to call authenticate method with.
   */
  async authenticate(pollingId: string): Promise<void> {
    if (!this.email) {
      throw new Error('You must provide an email.');
    }

    const response = await this.got
      .post(TgtgApiConfig.authPolling, {
        json: {
          device_type: 'IOS',
          email: this.email,
          request_polling_id: pollingId,
        },
      });

    if (response.statusCode != 200)
    throw new Error('There was an error during authentification, please retry.');

    //TODO: TEST
    const body = JSON.parse(response.body);

    if (!has(body, 'access_token') || !has(body, 'refresh_token'))
      throw new Error('There was an error during authentification, please retry.');

    this.accessToken = get(body, 'access_token');
    this.refreshToken = get(body, 'refresh_token');
    this.userId = get(body, 'startup_data.user.user_id');
  }
}
