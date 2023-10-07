import { createContext, useContext, useState } from "react";

interface Admin {
  uid: string;
  name: string;
  email: string;
  type: string;
  investments: any[];
}

interface AdminContext {
  admin: Admin;
  setAdmin: (admin: Admin) => void;
}

const AuthContext = createContext<AdminContext>({
  admin: { name: "", uid: "", email: "", type: "", investments: [] },
  setAdmin: () => {},
});

export const AuthContextProvider = ({ children }: any) => {
  const [admin, setAdmin] = useState<any>(null);
  const value = { admin, setAdmin };
  console.info("admin => ", admin);
  console.log("value", value);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const AdminAuth = () => {
  return useContext(AuthContext);
};
