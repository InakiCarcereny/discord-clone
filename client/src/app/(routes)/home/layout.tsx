"use client";

import { Poppins } from "next/font/google";

import { useEffect } from "react";
import { useAuth } from "../register/context/auth.context";
import { useRouter } from "next/navigation";
import { Discord } from "@/app/icons/Discord";
import { usePathname } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, isLoading } = useAuth();

  const router = useRouter();

  const pathname = usePathname();

  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated) {
        console.log("is authenticated");
        router.push("/home");
      } else {
        console.log("is not authenticated");
        router.push("/login");
      }
    }
  }, [isAuthenticated, isLoading, router]);

  return (
    <div
      className={`${poppins.className} ${poppins.className} antialiased flex h-screen w-screen bg-[#1c1d1f]`}
    >
      <aside className="h-screen w-[100px] px-2 pt-4 flex flex-col items-center">
        <span
          className={`${
            pathname === "/home" ? "rounded-[18px]" : ""
          } bg-[#5865f2] flex flex-col items-center cursor-pointer rounded-3xl duration-200 px-2 py-2 hover:rounded-[18px]`}
        >
          <Discord className="text-white h-10 w-10" />
        </span>

        <div className="border border-zinc-600 rounded-full w-10 mt-2"></div>
      </aside>

      <main className="w-full bg-[#33353b]">{children}</main>
    </div>
  );
}
