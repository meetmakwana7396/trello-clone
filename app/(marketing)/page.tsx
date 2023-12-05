import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";
import React from "react";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div
        className={cn(
          "flex justify-center items-center flex-col",
          headingFont.className
        )}
      >
        <div className="flex mb-4 items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2 " /> No 1 task management
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Taskify helps team move
        </h1>
        <div className="text-3xl text-white md:text-6xl bg-gradient-to-r from-fuchsia-600 to bg-pink-600 px-4 p-2 rounded-md w-fit">
          work forward.
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto font-medium",
          textFont.className
        )}
      >
        Collaborate, manage projects, and reach new productivity peaks. From
        high rise to home office, the way your team works is unique - accomplish
        it all with Taskify.
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/">Get Taskify for free</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
