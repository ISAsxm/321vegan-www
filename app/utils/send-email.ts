import type { ContactFormData } from "@/types/definitions";

export async function sendEmail(data: ContactFormData) {
  const apiEndpoint = `${process.env.NEXT_PUBLIC_BASE_URL}/api/email`;

  const res = await fetch(apiEndpoint, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await res.json();
  if (!res.ok) return null;
  return result.message;
}
