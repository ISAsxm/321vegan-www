import { createChallenge } from "altcha-lib";
import { NextResponse } from "next/server";
import { generateHmacKey } from "@/app/utils/hmac-key";

export async function GET() {
  try {
    const hmacKey = generateHmacKey();
    const { challenge, salt, algorithm, signature } = await createChallenge({
      hmacKey: hmacKey,
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
