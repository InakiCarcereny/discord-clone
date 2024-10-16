import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext<undefined>(undefined);

export function useUser() {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}
