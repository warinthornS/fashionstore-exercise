import { createContext } from "react";

export const AuthContext = createContext<{
  currentUser: string;
  updateCurrentUser: (_: string) => void;
} | null>(null);

// CounterContext =
