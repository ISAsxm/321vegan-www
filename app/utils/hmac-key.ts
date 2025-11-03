import crypto from "crypto";
import { ALTCHA_SECRET } from "@/constants";

export function generateHmacKey() {
  const hmac = crypto.createHmac("sha256", ALTCHA_SECRET);
  return hmac.digest("hex");
}
