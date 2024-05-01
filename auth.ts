import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "~/server/db";
import type { DefaultSession } from "next-auth";
import { type Adapter } from "next-auth/adapters";
import { createTable } from "~/server/db/schema/authSchema";

declare module "next-auth" {
  interface Session {
    user?: {
      id: string;
    } & DefaultSession["user"];
  }
}

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db, createTable) as Adapter,
  providers: [GitHub],
  callbacks: {
    async redirect({ url, baseUrl }) {
      console.log("url", url);
      console.log("baseUrl", baseUrl);

      return url.startsWith(baseUrl) ? url : baseUrl + "/protected/client";
    },
    session: ({ session, token, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
  secret: process.env.AUTH_SECRET,
});
