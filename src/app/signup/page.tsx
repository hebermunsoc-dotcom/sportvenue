"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import AuthCard from "@/components/auth/AuthCard";
import AuthInput from "@/components/auth/AuthInput";
import Button from "@/components/ui/Button";


export default function SignupPage() {
    const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [role, setRole] = useState("customer");
async function handleSignup() {
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: name,
      },
    },
  });

  if (error) {
    alert(error.message);
    return;
  }

  const { error: profileError } = await supabase
    .from("profiles")
    .insert([
      {
        email,
        role,
      },
    ]);

  if (profileError) {
    alert(profileError.message);
    return;
  }

  alert("Account created successfully!");
}
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50">
      <AuthCard title="Create Account">
        <div className="space-y-4">
          <AuthInput
  type="text"
  placeholder="Full Name"
  value={name}
  onChange={setName}
/>

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

<div>
  <label className="mb-2 block text-sm font-medium">
    Register As
  </label>

  <select
    value={role}
    onChange={(e) => setRole(e.target.value)}
    className="w-full rounded-xl border border-slate-300 px-4 py-3"
  >
    <option value="customer">
      Customer
    </option>

    <option value="owner">
      Turf Owner
    </option>
  </select>
</div>

<Button
  className="w-full"
  onClick={handleSignup}
>
  Create Account
</Button>
        </div>

        <p className="mt-4 text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-emerald-600"
          >
            Login
          </Link>
        </p>
      </AuthCard>
    </main>
  );
}