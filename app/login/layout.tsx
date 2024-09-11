import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};
const AuthLayout = async ({ children }: Props) => {
  const session = await auth();
  console.log(session?.user?.email);
  if (session?.user) return redirect("/");
  return (
    <div className="flex items-center justify-center h-[80vh]">{children}</div>
  );
};

export default AuthLayout;
