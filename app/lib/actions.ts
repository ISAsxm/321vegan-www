"use server";
import { verifyCaptchaToken } from "@/app/utils/captcha";
import { sendEmail } from "@/app/utils/send-email";
import type { ContactFormData } from "@/types/definitions";

export async function contactMeAction(
  captcha: string | null | undefined,
  formData: ContactFormData
) {
  if (!captcha)
    return { success: false, message: "Captcha challenge not completed" };

  // verify the captcha
  try {
    const captchaVerified = await verifyCaptchaToken(captcha);
    console.log("captchaVerified", captchaVerified);
    if (!captchaVerified)
      return { success: false, message: "Captcha challenge failed" };
  } catch (err) {
    console.error("Error", err);
    return { success: false, message: "Captcha failed" };
  }

  // send form data
  try {
    const res = await sendEmail(formData);

    if (!res) {
      return { success: false, message: "Send email failed" };
    }
    return { success: true, message: "Success send" };
  } catch (err) {
    console.error("Error", err);
    return { success: false, message: "Send email failed" };
  }
}
