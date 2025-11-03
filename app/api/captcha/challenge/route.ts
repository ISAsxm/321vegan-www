import { createChallenge } from "altcha-lib";
import { NextResponse } from "next/server";
import { ALTCHA_HMAC_KEY } from "@/constants";

export async function GET() {
  try {
    const { challenge, salt, algorithm, signature } = await createChallenge({
      hmacKey: ALTCHA_HMAC_KEY,
      algorithm: "SHA-256",
      maxnumber: 50000,
      saltLength: 20,
    });

    return NextResponse.json({
      challenge,
      salt,
      algorithm,
      signature,
    });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
