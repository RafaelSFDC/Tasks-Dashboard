"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { TfiGithub } from "react-icons/tfi";

const SocialLogin = () => {
  const [loading, setLoading] = useState(false);

  const socialLogin = (socialProvider: string) => {
    setLoading(true);
    signIn(socialProvider, {
      redirect: false,
    })
      .then(() => {})
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      <div className="relative">
        <div
          className="
        absolute 
        inset-0 
        flex 
        items-center
      "
        >
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-2 text-gray-500">Or continue with</span>
        </div>
      </div>
      <div className="flex items-center flex-col gap-3">
        <div className="flex space-x-2 gap-10">
          <Button
            variant="outline"
            className="text-red-400 rounded-full w-20 text-2xl p-5 border-2 border-red-300 hover:bg-red-300"
            type="button"
            disabled={loading}
            onClick={() => socialLogin("google")}
          >
            <FcGoogle />
          </Button>
          <Button
            variant="outline"
            className="rounded-full w-20 text-2xl p-5 border-2 border-slate-500 hover:bg-gray-500 hover:text-white transition-all"
            type="button"
            onClick={() => socialLogin("github")}
            disabled={loading}
          >
            <TfiGithub />
          </Button>
        </div>
      </div>
    </>
  );
};

export default SocialLogin;
