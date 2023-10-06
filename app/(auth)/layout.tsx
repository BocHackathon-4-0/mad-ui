'use client';

import React, {Suspense} from "react";
import "../globals.scss";
import {AuthContextProvider} from "@/app/context/AuthContext";
import LoadingSkeleton from "@/app/components/shared/loading";

export default function RootLayout({children}: {
    children: React.ReactNode;
}) {
    return (
        <AuthContextProvider>
            <html lang='en' className='h-full'>
                <body className={`bg-dark-1`}>
                    <Suspense fallback={<LoadingSkeleton/>}>
                        {children}
                    </Suspense>
                </body>
            </html>
        </AuthContextProvider>
    );
}
