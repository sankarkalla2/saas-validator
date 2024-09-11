import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "./auth.config";
import { prismaClient } from "./db.";

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prismaClient),
  session: { strategy: "jwt" },
  ...authConfig,
});
