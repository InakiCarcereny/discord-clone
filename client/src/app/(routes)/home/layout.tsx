"use client";

import { Poppins } from "next/font/google";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import { useAuth } from "../register/context/auth.context";

import { ServerSideBar } from "./components/server-side-bar/ServerSideBar.home";
import { NavigateSideBar } from "./components/navigate-side-bar/NavigateSideBar.home";
import { FriendsNav } from "./components/friends-nav/FriendsNav.home";
import { User } from "./components/user/User.home";
import { CreateServerModal } from "./components/create-server-modal/CreateServerModal.home";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const { isAuthenticated, isLoading } = useAuth();

  const router = useRouter();

  const pathname = usePathname();

  const showFriendsNav =
    pathname.startsWith("/home") && !pathname.includes("/store");

  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated) {
        router.push("/home");
      } else {
        router.push("/login");
      }
    }
  }, [isAuthenticated, isLoading, router]);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div
      className={`${poppins.className} ${poppins.className} antialiased flex h-screen w-screen bg-[#1c1d1f]`}
    >
      <div className="flex">
        <ServerSideBar handleOpen={handleOpen} />

        <NavigateSideBar open={open} />
      </div>

      <div className={`flex flex-col w-full bg-[#323338]`}>
        {showFriendsNav && <FriendsNav />}

        <main className={`w-full h-full bg-[#323338]`}>{children}</main>
      </div>

      <div
        className={`${
          pathname === "/home/profile" ? "hidden" : ""
        } absolute bottom-0 left-[70px] bg-[#232428] w-[240px] h-[50px] flex items-center justify-between px-1 border-t border-[#33353b]`}
      >
        <User />
      </div>

      {open && <CreateServerModal setOpen={setOpen} />}
    </div>
  );
}
