'use client';

import React from "react";
import {AuthContextProvider} from "@/app/context/AuthContext";

export function Providers({ children}: {
    children: React.ReactNode
}) {
    return(
        <AuthContextProvider>
            {children}
        </AuthContextProvider>
    )
}
