import { headingFont } from "@/app/(marketing)/page";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
          <Image src="/logo.svg" alt="logo" height={30} width={30} />
          <p className={cn("text-lg text-neutral-700", headingFont.className)}>
            Taskify
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
