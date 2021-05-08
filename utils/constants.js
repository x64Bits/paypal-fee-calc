export const IS_SERVER = typeof window === 'undefined'

export const IS_EXT = !IS_SERVER && !!chrome.extension
