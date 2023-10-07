'use client';

import RightSidebar from "@/app/components/shared/RightSidebar";
import LeftSidebar from "@/app/components/shared/LeftSidebar";
import BottomBar from "@/app/components/shared/Bottombar";
import Navbar from "@/app/components/shared/Navbar";
import {Inter} from 'next/font/google';
import React, {Suspense} from "react";
import '../globals.scss';
import LoadingSkeleton from "@/app/components/shared/loading";
import {Providers} from "@/app/services/providers";

const inter = Inter({subsets: ['latin']})

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className='h-full'>
            <body className={inter.className}>
            <Providers>
                <Navbar/>
                    <main className={'flex flex-row'}>
                        <LeftSidebar />
                        <section className={'main-container'}>
                            <div className={'w-full max-w-4xl test'}>
                                    <Suspense fallback={<LoadingSkeleton />}>
                                        {children}
                                    </Suspense>
                            </div>
                        </section>
                        <RightSidebar />
                    </main>
                <BottomBar />
            </Providers>
            </body>
        </html>
    )
}
