"use server";
import { verifyCaptchaToken } from "@/app/utils/captcha";
import { sendEmail } from "@/app/utils/send-email";
import type { ContactFormData } from "@/types/definitions";

export async function contactMeAction(
  captcha: string | null,
  formData: ContactFormData
) {
  if (!captcha)
    return { success: false, message: "Captcha challenge not completed" };
  // verify the captcha
  try {
    const isValidCaptcha = await verifyCaptchaToken(captcha);
    if (!isValidCaptcha) return { success: false, message: "Captcha invalide" };
  } catch (err) {
    console.log("Error", err);
    return { success: false, message: "Captcha failed" };
  }

  // send form data by mail
  try {
    const res = await sendEmail(formData);

    if (!res) {
      return { success: false, message: "Send email failed" };
    }
    return { success: true, message: "Success send" };
  } catch (err) {
    console.log("Error", err);
    return { success: false, message: "Send email failed" };
  }
}
