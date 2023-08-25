export const TgtgConfig = {
  baseUrl: 'https://apptoogoodtogo.com/api',
  authByEmail: 'auth/v3/authByEmail',
  authPolling: 'auth/v3/authByRequestPollingId',
  items: 'item/v8/',
  refresh: 'auth/v3/token/refresh',
  defaultApkVersion: '22.5.5',
  userAgent: 'TooGoodToGo/21.9.0 (813) (iPhone/iPhone 7 (GSM); iOS 15.1; Scale/2.00)',
  defaultAccessTokenLifetime: 3600 * 4, // 4 hours
  pollingWaitTime: 5, // seconds
  maxPollingTries: 24, // 24 * polling_wait_time = 2 minutes
};
