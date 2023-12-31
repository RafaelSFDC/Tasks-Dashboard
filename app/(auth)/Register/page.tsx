import Image from "next/image";
import type { Metadata } from "next";
import RegisterForm from "./RegisterForm";

export const metadata: Metadata = {
  description: "Create Account",
};

export default function Register() {
  return (
    <main className="h-full bg-zinc-200 flex items-center justify-center">
      <div className="w-full bg-white max-w-[90%] xl:max-w-[1200px] h-[90%] rounded-xl shadow-md flex">
        <RegisterForm />
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
