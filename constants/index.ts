export const IS_DEVMODE = process.env.NODE_ENV === "development";

export const API_URL = process.env.BACKEND_API_URL;

export const ALTCHA_SECRET =
  process.env.ALTCHA_SECRET ??
  "a very long string to be used to generate an hmackey used by altcha captcha";
