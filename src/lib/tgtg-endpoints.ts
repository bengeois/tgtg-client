export const TgtgEndpoints = {
    baseUrl: "https://apptoogoodtogo.com/api",
    itemEndpoint: "/item/v8/",
    authByEmail: "/auth/v3/authByEmail",
    authPolling: "/auth/v3/authByRequestPollingId",
    signUpByEmail: "/auth/v3/signUpByEmail",
    refresh: "/auth/v3/token/refresh",
    defaultApkVersion: "22.5.5",
    userAgents: [
        "TGTG/{} Dalvik/2.1.0 (Linux; U; Android 9; Nexus 5 Build/M4B30Z)",
        "TGTG/{} Dalvik/2.1.0 (Linux; U; Android 10; SM-G935F Build/NRD90M)",
        "TGTG/{} Dalvik/2.1.0 (Linux; Android 12; SM-G920V Build/MMB29K)",
    ],
    defaultAccessTokenLifetime: 3600 * 4, // 4 hours
    pollingWaitTime: 5, // seconds
    maxPollingTries: 24 // 24 * polling_wait_time = 2 minutes
}