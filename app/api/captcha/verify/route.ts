import { verifySolution } from "altcha-lib";
import { type Payload } from "altcha-lib/types";
import { NextResponse } from "next/server";
import { ALTCHA_HMAC_KEY } from "@/constants";

type RequestDataType = {
  payload: string | Payload;
};

export type VerifyCaptchaApiResponse = {
  verified: boolean;
};

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as RequestDataType;
    const verified = await verifySolution(data.payload, ALTCHA_HMAC_KEY);
    return NextResponse.json(
      {
        success: verified,
      },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
