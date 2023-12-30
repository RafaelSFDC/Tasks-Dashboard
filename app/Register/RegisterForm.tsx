"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Link from "next/link";
import React from "react";

const RegisterForm = () => {
  const register = async (e: any) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    axios.post("/api/register", {
      name,
      email,
      password,
    });
  };
  return (
    <div className="flex items-center flex-1">
      <form
        method="POST"
        className="w-[80%] gap-5 p-10 flex-1 flex flex-col h-full"
        onSubmit={register}
      >
        <div>
          <h1 className="text-3xl font-bold">Sign up</h1>
          <h3 className="text-slate-500">Sign up for an account</h3>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-semibold">
            Name
          </label>
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className="border-l-4 border-sky-400 p-2 rounded outline-none focus:border-amber-400 transition-all"
          />
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
        <div>
          Already have an account?{" "}
          <Link href="/" className="font-bold border-b-2 border-sky-300">
            Login Now
          </Link>{" "}
        </div>
        <Button variant="default" className="bg-sky-400">
          Create Account
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
