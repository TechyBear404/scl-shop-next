import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "~/server/db";
import type { DefaultSession, Session } from "next-auth";
import { type Adapter } from "next-auth/adapters";
import { createTable } from "~/server/db/schema/authSchema";
import {
  accounts,
  sessions,
  users,
  verificationTokens,
} from "~/server/db/schema/authSchema";
import { PgTableFn, pgTable } from "drizzle-orm/pg-core";
const pgTableHijack: PgTableFn = (name, columns, extraConfig) => {
  (name: string) => `scl-shop-next_${name}`;
  switch (name) {
    case "user":
      return users;
    case "account":
      return accounts;
    case "session":
      return sessions;
    case "verificationToken":
      return verificationTokens;
    default:
      return pgTable(name, columns, extraConfig);
  }
};

declare module "next-auth" {
  interface Session {
    user?: {
      id: string;
      role: string;
    } & DefaultSession["user"];
  }
}

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db, pgTableHijack),
  providers: [GitHub],
  session: { strategy: "database" },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async session({ session, user, token }) {
      session.user = { ...session.user, ...user };
      // console.log("session", session);

      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
});
