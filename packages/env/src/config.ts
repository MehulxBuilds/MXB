import { z } from "zod";
import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });

export const ServerEnvSchema = z.object({
    DATABASE_URL: z.string().url(),
    GITHUB_CLIENT_ID: z.string(),
    GITHUB_CLIENT_SECRET: z.string(),
    BETTER_AUTH_SECRET: z.string(),
    PORT: z.string(),
    NODE_ENV: z.string().optional(),
    CLIENT_URL: z.string().url(),
    ADMIN_URL: z.string().url(),
    SERVER_URL: z.string().url(),
    ALLOWED_GITHUB_USERNAME: z.string(),
});

export type ServerEnv = z.infer<typeof ServerEnvSchema>;
export const server_env = ServerEnvSchema.parse(process.env);