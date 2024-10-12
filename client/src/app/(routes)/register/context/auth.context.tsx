"use client";

import { FormValues, LoginValues } from "@/app/models/FormValues.d";
import { AuthContextTypes } from "@/app/models/AuthContext.d";

import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

import {
  loginRequest,
  registerRequest,
  verifyRequest,
} from "@/app/interceptors/auth.interceptor";

const AuthContext = createContext<AuthContextTypes | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const signUp = async (value: FormValues) => {
    try {
      const res = await registerRequest(value);
      setUser(res.data);
    } catch (err: any) {
      setError(err.response.data);
    }
  };

  const signIn = async (value: LoginValues) => {
    try {
      const res = await loginRequest(value);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (err: any) {
      setError(err.response.data);
    }
  };

  useEffect(() => {
    async function checkToken() {
      setIsLoading(true);

      const cookies = Cookies.get();
      console.log(cookies);

      if (!cookies.token) {
        setIsAuthenticated(false);
        setIsLoading(false);
        return;
      }

      try {
        const res = await verifyRequest(cookies.token);

        if (!res.data) {
          setIsAuthenticated(false);
        } else {
          setIsAuthenticated(true);
          setUser(res.data);
        }
      } catch (err: any) {
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    }

    checkToken();
  }, []);

  const logOut = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        signUp,
        signIn,
        isAuthenticated,
        isLoading,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
