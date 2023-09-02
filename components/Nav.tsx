"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      {/* Logo */}
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/images/logo.svg"
          alt="Wilt logo"
          width={80}
          height={80}
          className="object-contain"
        />
      </Link>
    </nav>
  );
};

export default Nav;
