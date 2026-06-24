"use client";

import { supabase } from "@/lib/supabase";
import { useState } from "react";
import Link from "next/link";
import AuthCard from "@/components/auth/AuthCard";
import AuthInput from "@/components/auth/AuthInput";
import Button from "@/components/ui/Button";

export default function LoginPage() {
    const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
async function handleLogin() {
  const { error } =
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

  if (error) {
    alert(error.message);
    return;
  }

  alert("Login successful!");
}
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50">
      <AuthCard title="Login">
        <div className="space-y-4">
          <AuthInput
  type="email"
  placeholder="Email"
  value={email}
  onChange={setEmail}
/>

<AuthInput
  type="password"
  placeholder="Password"
  value={password}
  onChange={setPassword}
/>  

  <Button
  className="w-full"
  onClick={handleLogin}
>
  Login
</Button>
        </div>

        <p className="mt-4 text-center text-sm text-slate-600">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-emerald-600"
          >
            Sign up
          </Link>
        </p>
      </AuthCard>
    </main>
  );
}