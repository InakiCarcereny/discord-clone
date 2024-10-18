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
import { useServer } from "./context/server.context";

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

  const { servers } = useServer();

  const router = useRouter();

  const pathname = usePathname();

  const showFriendsNav =
    pathname.startsWith("/home") && !pathname.includes("/store");

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

  const handleOpen = () => {
    setOpen(!open);
  };

  const serverId = servers.map((server) => server._id);

  const isMatchingServer =
    serverId.some((id) => pathname === `/home/${id}`) ||
    pathname === "/home/profile";

  return (
    <div
      className={`${poppins.className} ${poppins.className} antialiased flex h-screen w-screen bg-[#1c1d1f]`}
    >
      <div className="flex">
        <ServerSideBar open={open} handleOpen={handleOpen} />

        <NavigateSideBar open={open} />
      </div>

      <div className={`flex flex-col w-full bg-[#323338]`}>
        {showFriendsNav && <FriendsNav />}

        <main
          className={`w-full h-full bg-[#323338] ${
            isMatchingServer ? "px-0" : "px-10"
          }`}
        >
          {children}
        </main>
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
