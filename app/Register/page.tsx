import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "Create Account",
};

export default function Register() {
  const register = async (e: any) => {
    "use server";
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await axios.post("/api/register", {
      name,
      email,
      password,
    });

    console.log(res);
  };
  return (
    <main className="h-full bg-zinc-200 flex items-center justify-center">
      <div className="w-full bg-white max-w-[90%] xl:max-w-[1200px] h-[90%] rounded-xl shadow-md flex">
        <div className="flex items-center flex-1">
          <form
            method="POST"
            action={register}
            className="w-[80%] gap-5 p-10 flex-1 flex flex-col h-full"
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
        <Image
          src="/login-image.png"
          alt="login image"
          className="rounded-xl flex-1 hidden lg:block"
          // objectFit="contain"
          width={600}
          height={665}
        />
      </div>
    </main>
  );
}
