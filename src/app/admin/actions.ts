"use server";

import { getCloudflareContext } from "@opennextjs/cloudflare";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { clearSessionCookie, isAuthenticated, setSessionCookie } from "@/lib/adminAuth";

const LoginSchema = z.object({ password: z.string().min(1) });

export interface LoginState {
  status: "idle" | "error";
}

export async function login(_prevState: LoginState, formData: FormData): Promise<LoginState> {
  const parsed = LoginSchema.safeParse({ password: formData.get("password") });
  const expected = process.env.ADMIN_PASSWORD;

  if (!parsed.success || !expected || parsed.data.password !== expected) {
    return { status: "error" };
  }

  await setSessionCookie();
  redirect("/admin");
}

export async function logout(): Promise<void> {
  await clearSessionCookie();
  redirect("/admin/login");
}

const UpdateLeadSchema = z.object({
  id: z.coerce.number(),
  status: z.enum(["new", "contacted", "quoted", "won", "lost"]),
  notes: z.string().max(2000),
});

export async function updateLead(formData: FormData): Promise<void> {
  if (!(await isAuthenticated())) redirect("/admin/login");

  const parsed = UpdateLeadSchema.safeParse({
    id: formData.get("id"),
    status: formData.get("status"),
    notes: formData.get("notes"),
  });
  if (!parsed.success) return;

  const { env } = await getCloudflareContext({ async: true });
  await env.DB.prepare("UPDATE leads SET status = ?, notes = ? WHERE id = ?")
    .bind(parsed.data.status, parsed.data.notes, parsed.data.id)
    .run();

  revalidatePath("/admin");
}
