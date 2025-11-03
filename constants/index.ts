export const IS_DEVMODE = process.env.NODE_ENV === "development";

export const ALTCHA_SECRET =
  process.env.ALTCHA_SECRET ??
  "a very long string to use in order to generate an hmackey used by altcha captcha";
