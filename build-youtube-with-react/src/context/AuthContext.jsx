import React from "react";
import { supabase } from "../utils/supabase";

export const AuthContext = React.createContext(null);

export function AuthProvider({ children }) {
  React.useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      console.log("GetSession", data.session.user);
    });

    supabase.auth.onAuthStateChange((_, session) => {
      console.log("onAuthStateChange", session);
    });
  }, []);

  return <AuthContext.Provider value>{children}</AuthContext.Provider>;
}
