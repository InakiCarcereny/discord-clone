"use client";

import {
  getUserInfoRequest,
  updataUserInfoRequest,
} from "@/app/interceptors/user.interceptor";
import { useContext, createContext, useState, useEffect } from "react";

export interface UserContextTypes {
  userInfo: User | null;
  error: string[];
  updateUserInfo: (data: User) => Promise<void>;
}

export interface User {
  name: string;
  nickname: string;
  description: string;
  avatar: string;
  banner: string;
  primaryColor: string;
  secondaryColor: string;
}

export const UserContext = createContext<UserContextTypes | undefined>(
  undefined
);

export function useUser() {
  const context = useContext(UserContext);

  if (context === undefined)
    throw new Error("useUser must be used within a UserProvider");

  return context;
}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState([]);

  useEffect(() => {
    async function getUserInfo() {
      try {
        const res = await getUserInfoRequest();
        setUserInfo(res.data);
      } catch (err: any) {
        setError(err.response.data);
      }
    }
    getUserInfo();
  }, []);

  const updateUserInfo = async (data: User) => {
    try {
      const res = await updataUserInfoRequest(data);
      setUserInfo(res.data);
    } catch (err: any) {
      console.log(err);
      setError(err.response.data);
    }
  };

  return (
    <UserContext.Provider
      value={{
        userInfo,
        error,
        updateUserInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
