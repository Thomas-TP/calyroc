export const TURNSTILE_SITE_KEY = "0x4AAAAAADz0gll1MFJs2mni";
const SITEVERIFY_WORKER_URL = "https://turnstile-siteverify-calyroc.thomastp.workers.dev/";

export async function verifyTurnstileToken(token: string): Promise<boolean> {
  try {
    const response = await fetch(SITEVERIFY_WORKER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });
    const result = (await response.json()) as { success: boolean };
    return result.success === true;
  } catch (error) {
    console.error("Turnstile verification request failed", error);
    return false;
  }
}
