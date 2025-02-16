import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import { ReactNode, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { auth, googleProvider } from "../config/firebase";
import { AuthContext } from "../contexts/AuthContext";

interface AuthProviderProps {
  children: ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);

      if (user && !location.pathname.startsWith("/dashboard")) {
        navigate("/dashboard/list-view", { replace: true });
      }
    });

    return unsubscribe;
  }, [location.pathname, navigate]);

  const login = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
