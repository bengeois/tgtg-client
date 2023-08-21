import { TgtgApiConfig } from './tgtg-endpoints';

export type TgtgClientOptions = {
  /**
   * The optional first name to use.
   *
   * @default faker.person.firstName()
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

  /**
   * Generates an email address using the given person's name as base.
   *
   * @param options The options to use. Defaults to `{}`.
   * @param options.email The optional first name to use. If not specified, a random one will be chosen.
   * in the email address. Defaults to `false`.
   *
   * @example
   * faker.internet.email() // 'Kassandra4@hotmail.com'
   * faker.internet.email({ firstName: 'Jeanne', lastName: 'Doe' }) // 'Jeanne63@yahoo.com'
   * faker.internet.email({ firstName: 'Jeanne', lastName: 'Doe', provider: 'example.fakerjs.dev' }) // 'Jeanne_Doe88@example.fakerjs.dev'
   * faker.internet.email({ firstName: 'Jeanne', lastName: 'Doe', provider: 'example.fakerjs.dev', allowSpecialCharacters: true }) // 'Jeanne%Doe88@example.fakerjs.dev'
   *
   * @since 2.0.1
   */
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
