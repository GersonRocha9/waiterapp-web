import { ReactNode, createContext, useEffect, useState } from "react";

import { UserCredential } from "firebase/auth";
import { auth } from "../services/firebase";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

export const AuthContext = createContext({});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userLogged, setUserLogged] = useState<UserCredential | null>(null);

  const [signInWithEmailAndPassword, user, error, loading] =
    useSignInWithEmailAndPassword(auth);

  useEffect(() => {
    const token = localStorage.getItem("waiterapp-token");
    const user = localStorage.getItem("waiterapp-user");

    if (token && user) {
      setUserLogged(JSON.parse(user));
    }
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(email, password);
      setUserLogged(user as UserCredential);
      const token = (await user?.user.getIdToken()) as string;

      localStorage.setItem("waiterapp-token", token);
      localStorage.setItem("waiterapp-user", JSON.stringify(user));
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = () => {
    localStorage.removeItem("waiterapp-token");
    localStorage.removeItem("waiterapp-user");
    setUserLogged(null);
  };

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, isLogged: !!userLogged, user, error, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
