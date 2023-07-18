import React from "react";
import { supabase } from "../utils/supabase";

export const AuthContext = React.createContext(null);

export function AuthProvider({ children }) {
  const [profile, setProfile] = React.useState(null);

  React.useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      console.log("GetSession", data.session.user);
      setProfile(data.session.user);
    });

    supabase.auth.onAuthStateChange((_, session) => {
      console.log("onAuthStateChange", session);
      setProfile(session.user);
    });
  }, []);

  return (
    <AuthContext.Provider value={profile}>{children}</AuthContext.Provider>
  );
}
