"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";
import Link from "next/link";
import React from "react";

const LoginForm = () => {
  const login = async (e: any) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    axios.post("/api/login", {
      email,
      password,
    });
  };
  return (
    <div className="flex items-center flex-1">
      <form
        className="w-[80%] gap-8 p-10 flex-1 flex flex-col h-full"
        onSubmit={login}
      >
        <div>
          <h1 className="text-3xl font-bold">Login</h1>
          <h3 className="text-slate-500">Welcome back, you've been missed!</h3>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="border-l-4 border-sky-400 p-2 rounded outline-none focus:border-amber-400 transition-all"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <input
            type="password"
            placeholder="password"
            name="password"
            className="border-l-4 border-sky-400 p-2 rounded outline-none focus:border-amber-400 transition-all"
          />
        </div>

        <div className="items-top flex space-x-2">
          <Checkbox id="remember" />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="remember"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember me
            </label>
            <p className="text-sm text-muted-foreground">Keep me logged in</p>
          </div>
        </div>
        <div>
          Dosen't have an account?{" "}
          <Link href="Register" className="font-bold border-b-2 border-sky-300">
            Register Now
          </Link>{" "}
        </div>
        <Button variant="default" className="bg-sky-400">
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
