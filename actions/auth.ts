"use server";

import { signIn, signOut } from "@/auth";

export const Login = async (provider: "google" | "github") => {
  await signIn(provider);
};

export const Logout = async () => {
  await signOut();
};
