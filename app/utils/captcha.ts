export async function verifyCaptchaToken(captcha: string | null) {
  if (!captcha) return false;
  const apiEndpoint = `${process.env.NEXT_PUBLIC_BASE_URL}/api/captcha/verify`;

  const res = await fetch(apiEndpoint, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ payload: captcha }),
  });
  const result = await res.json();
  if (!res.ok) return false;
  return result.success;
}
