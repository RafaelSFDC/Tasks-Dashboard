import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

export default function Home() {
  const login = async (e: any) => {
    "use server";
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await axios.post("/api/register", {
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
            className="w-[80%] gap-8 p-10 flex-1 flex flex-col h-full"
            action={login}
          >
            <div>
              <h1 className="text-3xl font-bold">Login</h1>
              <h3 className="text-slate-500">
                Welcome back, you've been missed!
              </h3>
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
                <p className="text-sm text-muted-foreground">
                  Keep me logged in
                </p>
              </div>
            </div>
            <div>
              Dosen't have an account?{" "}
              <Link
                href="Register"
                className="font-bold border-b-2 border-sky-300"
              >
                Register Now
              </Link>{" "}
            </div>
            <Button variant="default" className="bg-sky-400">
              Login
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
