import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "~/server/db";
import type { DefaultSession, NextAuthConfig, Session } from "next-auth";
import { type Adapter } from "next-auth/adapters";
import { createTable } from "~/server/db/schema/authSchema";
import {
  accounts,
  sessions,
  users,
  verificationTokens,
} from "~/server/db/schema/authSchema";
import { type PgTableFn, pgTable } from "drizzle-orm/pg-core";
const pgTableHijack: PgTableFn = (name, columns, extraConfig) => {
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

// export const authConfig = {
//   adapter: DrizzleAdapter(db, pgTableHijack),
//   providers: [GitHub],
//   session: { strategy: "database" },
//   callbacks: {
//     async redirect({ url, baseUrl }) {
//       // Allows relative callback URLs
//       if (url.startsWith("/")) return `${baseUrl}${url}`;
//       // Allows callback URLs on the same origin
//       else if (new URL(url).origin === baseUrl) return url;
//       return baseUrl;
//     },
//     async session({ session, user }) {
//       session.user.id = user.id;
//       return session;
//     },
//     authorized({ auth, request: { nextUrl } }) {
//       const isLoggedIn = !!auth?.user;
//       const paths = ["/admin"];
//       const isProtected = paths.some((path) =>
//         nextUrl.pathname.startsWith(path),
//       );

//       if (!isLoggedIn && isProtected) {
//         const redirectUrl = new URL("api/auth/signin", nextUrl.origin);
//         redirectUrl.searchParams.set("callbackUrl", nextUrl.href);
//         return Response.redirect(redirectUrl);
//       }
//     },
//   },
//   secret: process.env.AUTH_SECRET,
// } satisfies NextAuthConfig;

// export const { auth, handlers, signIn, signOut } = NextAuth(authConfig);

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
    async session({ session, user }) {
      session.user.id = user.id;
      return session;
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const paths = ["/admin"];
      const isProtected = paths.some((path) =>
        nextUrl.pathname.startsWith(path),
      );

      if (!isLoggedIn && isProtected) {
        const redirectUrl = new URL("api/auth/signin", nextUrl.origin);
        redirectUrl.searchParams.set("callbackUrl", nextUrl.href);
        return Response.redirect(redirectUrl);
      }
    },
  },
  secret: process.env.AUTH_SECRET,
});
