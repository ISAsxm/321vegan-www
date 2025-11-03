import { verifySolution } from "altcha-lib";
import { type Payload } from "altcha-lib/types";
import { NextResponse } from "next/server";
import { generateHmacKey } from "@/app/utils/hmac-key";

type RequestDataType = {
  payload: string | Payload;
};

export type VerifyCaptchaApiResponse = {
  verified: boolean;
};

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as RequestDataType;
    const hmacKey = generateHmacKey();
    const verified = await verifySolution(data.payload, hmacKey);
    if (!verified)
      return NextResponse.json({ success: false }, { status: 400 });
    return NextResponse.json(
      {
        success: true,
      },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
