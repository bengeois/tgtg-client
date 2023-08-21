import { TgtgApiConfig } from './tgtg-endpoints';

export type TgtgClientOptions = {
  /**
   * Email of your TooGoodToGo account.
   */
  email?: string;
  accessToken?: string;
  refreshToken?: string;
  userId?: string;
  cookie?: string;
  userAgent?: string;
  language?: string;
  accessTokenLifetime?: number;
  deviceType?: string;
};

export class TgtgClient {
  email: string | null;
  accessToken: string | null;
  refreshToken: string | null;
  userId: string | null;
  cookie: string | null;
  userAgent: string | null;
  language: string;
  accessTokenLifetime: number;
  deviceType: string;
  constructor(options: TgtgClientOptions) {
    this.email = options.email || null;
    this.accessToken = options.accessToken || null;
    this.refreshToken = options.refreshToken || null;
    this.userId = options.userId || null;
    this.cookie = options.cookie || null;
    this.userAgent = options.userAgent || null;
    this.language = options.language || 'en-UK';
    this.accessTokenLifetime = options.accessTokenLifetime || TgtgApiConfig.defaultAccessTokenLifetime;
    this.deviceType = options.deviceType || 'android';
  }

  async login() {
    if (!this.email || (this.accessToken && this.refreshToken && this.userId)) {
      throw new Error('You must provide at least email or access_token, refresh_token and user_id');
    }
  }
}
