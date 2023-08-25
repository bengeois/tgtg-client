/**
 * Credentials of the TooGoodToGoClient.
 *
 * @interface
 */
export interface TgtgClientCredentials {
  /**
   * Access Token of the TooGoodToGo account to interact with.
   */
  accessToken: string | null;
  /**
   * Refresh Token of the TooGoodToGo account to interact with.
   */
  refreshToken: string | null;
  /**
   * User ID of the TooGoodToGo account to interact with.
   */
  userId: string | null;
  /**
   * Time to live of the current access token
   */
  accessTokenTtl: number;
}
