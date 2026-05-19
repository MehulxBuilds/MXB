import { z } from "zod";

export const AdminEnvSchema = z.object({
    NEXT_PUBLIC_API_BASE: z.string().url(),
    NEXT_PUBLIC_BETTER_AUTH_URL: z.string(),
    NEXT_PUBLIC_ADMIN_APP_URL: z.string(),
    NEXT_PUBLIC_WEB_APP_URL: z.string(),
    PORT: z.string(),
});

export type AdminEnv = z.infer<typeof AdminEnvSchema>;
export const admin_env = AdminEnvSchema.parse(process.env);