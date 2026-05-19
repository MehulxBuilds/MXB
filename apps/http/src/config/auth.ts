import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { oAuthProxy } from 'better-auth/plugins';
import { server_env as env } from "@repo/env";
import { client } from '@repo/db';

const ALLOWED_GITHUB_USERNAME = env.ALLOWED_GITHUB_USERNAME;

type GitHubProfile = {
  id: number;
  login: string;
  name: string | null;
  email: string | null;
  avatar_url: string;
};

type GitHubEmail = {
  email: string;
  primary: boolean;
  verified: boolean;
};

export const auth = betterAuth({
  plugins: [oAuthProxy()],
  database: prismaAdapter(client, {
    provider: 'postgresql'
  }),
  trustedOrigins: [env.ADMIN_URL, env.CLIENT_URL],
  onAPIError: {
    errorURL: `${env.ADMIN_URL}/sign-in`,
  },
  socialProviders: {
    github: {
      prompt: 'select_account',
      clientId: env.GITHUB_CLIENT_ID!,
      clientSecret: env.GITHUB_CLIENT_SECRET!,
      redirectURI: `${env.SERVER_URL}/api/auth/callback/github`,

      getUserInfo: async (token) => {
        const headers = {
          Authorization: `Bearer ${token.accessToken}`,
          "User-Agent": "better-auth",
        };

        const profileResponse = await fetch("https://api.github.com/user", {
          headers,
        });

        if (!profileResponse.ok) return null;

        const profile = await profileResponse.json() as GitHubProfile;

        if (profile.login.toLowerCase() !== ALLOWED_GITHUB_USERNAME.toLowerCase()) {
          return null;
        }

        const emailsResponse = await fetch("https://api.github.com/user/emails", {
          headers,
        });
        const emails = emailsResponse.ok
          ? await emailsResponse.json() as GitHubEmail[]
          : [];
        const email = profile.email ?? (emails.find((item) => item.primary) ?? emails[0])?.email;
        const emailVerified = emails.find((item) => item.email === email)?.verified ?? false;

        if (!email) return null;

        return {
          user: {
            id: profile.id.toString(),
            name: profile.login,
            email,
            image: profile.avatar_url,
            emailVerified,
          },
          data: profile,
        };
      },
    },
  },
});
