import Image from "next/image";
import LoginForm from "./LoginForm";

export default function Home() {
  return (
    <main className="h-full bg-zinc-200 flex items-center justify-center">
      <div className="w-full bg-white max-w-[90%] xl:max-w-[1200px] h-[90%] rounded-xl shadow-md flex">
        <LoginForm />
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
