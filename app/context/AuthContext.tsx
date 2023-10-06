import {createContext, useContext, useState} from "react";

interface Admin {
    uid: string;
    name: string;
}

interface AdminContext {
    admin: Admin;
}

const AuthContext = createContext<AdminContext>({
    admin: {name: '', uid: ''}
});

export const AuthContextProvider = ({children}: any) => {
    const [admin, setAdmin] = useState<any>(null);
    const value = {admin, setAdmin};
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export const AdminAuth = () => {
    return useContext(AuthContext);
}
