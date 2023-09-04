"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
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
    </nav>
  );
};

export default Nav;
