import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import localFont from "next/font/local";

const headingFont = localFont({
  src: "../public/fonts/font.woff2",
});

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
          <Image
            src="/logo.svg"
            alt="logo"
            height={30}
            width={80}
            className=""
          />
          <p
            className={cn("text-lg text-neutral-700", headingFont.className)}
          ></p>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
