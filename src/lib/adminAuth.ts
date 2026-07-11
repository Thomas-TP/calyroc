import { cookies } from "next/headers";

const COOKIE_NAME = "calyroc_admin";
const SESSION_DURATION_MS = 1000 * 60 * 60 * 12; // 12h

function toHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

async function getSecretKey(): Promise<CryptoKey> {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) {
    throw new Error("ADMIN_SESSION_SECRET is not set");
  }
  return crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"],
  );
}

async function createSessionToken(): Promise<string> {
  const expires = Date.now() + SESSION_DURATION_MS;
  const key = await getSecretKey();
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(String(expires)),
  );
  return `${expires}.${toHex(signature)}`;
}

async function verifySessionToken(token: string | undefined): Promise<boolean> {
  if (!token) return false;
  const [expiresStr, signatureHex] = token.split(".");
  if (!expiresStr || !signatureHex) return false;

  const expires = Number(expiresStr);
  if (!Number.isFinite(expires) || expires < Date.now()) return false;

  const key = await getSecretKey();
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(expiresStr));
  return timingSafeEqual(toHex(signature), signatureHex);
}

export async function setSessionCookie(): Promise<void> {
  const token = await createSessionToken();
  const store = await cookies();
  store.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_DURATION_MS / 1000,
  });
}

export async function clearSessionCookie(): Promise<void> {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}

export async function isAuthenticated(): Promise<boolean> {
  const store = await cookies();
  return verifySessionToken(store.get(COOKIE_NAME)?.value);
}
