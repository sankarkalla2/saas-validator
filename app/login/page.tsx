"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

import { useTransition } from "react";
import { Login } from "@/actions/auth";

function LoginForm() {
  const [isLoading, startTransition] = useTransition();

  const handleLogin = (provider: "google" | "github") => {
    startTransition(async () => {
      await Login(provider);
    });
  };
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Login</CardTitle>
        <CardDescription>
          Login to your account on Sass-Validator
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <Button
            className="w-full"
            onClick={() => handleLogin("google")}
            disabled={isLoading}
          >
            <FcGoogle className="h-5 w-5 mr-2" />
            Sign up with Google
          </Button>
          <Button
            className="w-full"
            onClick={() => handleLogin("github")}
            disabled={isLoading}
          >
            <FaGithub className="h-5 w-5 mr-2" />
            Sign up with GitHub
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default LoginForm;
