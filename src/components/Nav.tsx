"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/useUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import useAuthModal from "@/hooks/useAuthModal";

const Nav = () => {
  const router = useRouter();
  const authModal = useAuthModal();

  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();

    router.refresh();
  };
  return (
    <nav className="flex-between w-full mb-16 pt-3 ">
      {/* Logo */}
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/images/logo2.jpg"
          alt="Dall-Eth logo"
          width={90}
          height={90}
          className="object-contain"
        />
      </Link>
      <Link
        href="/create-post"
        className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
      >
        Create
      </Link>

      <div className="flex justify-between items-center gap-x-4">
        {user ? (
          <div className="flex gap-x-4 items-center">
            <Button onClick={handleLogout} className="bg-white px-6 py-2">
              Logout
            </Button>
            <Button
              onClick={() => router.push("/")}
              className="bg-white"
            ></Button>
          </div>
        ) : (
          <>
            <div>
              <Button
                onClick={authModal.onOpen}
                className="
                    bg-transparent 
                    text-neutral-300 
                    font-medium
                  "
              >
                Sign up
              </Button>
            </div>
            <div>
              <Button onClick={authModal.onOpen} className="bg-white px-6 py-2">
                Log in
              </Button>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
