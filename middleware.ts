import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    if(request.nextUrl.pathname.startsWith('/')) {
        const token = request.cookies.get('token')?.value || '';
        console.info(" ===> Tries to access home \n ===> Check Authentication \n Token: ", token);
        if(token) {
            return NextResponse.redirect(new URL('/sign-in', request.url))
        }
    }
}

export const config = {
    matcher: ['/']
}
