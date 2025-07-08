import { createContext, useState } from "react";

export type AuthUser = {
  name: string;
  email: string;
};

type UserContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

//component that provide context value
type UserContextProviderProps = {
  children: React.ReactNode;
};

// export const UserContext = createContext<UserContextType | null>(null);
export const UserContext = createContext({} as UserContextType);

//define provider component
export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
