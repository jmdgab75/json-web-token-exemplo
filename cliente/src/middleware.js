 'use server'
import { NextResponse } from "next/server";
import { validateToken } from "./app/functions/validateToken";

export const middleware = async (request) => {
    const token = request.cookies.get('token')?.value;
    const urlLogin = new URL('/', request.url);
    const isTokenValidated = await validateToken(token);
    const urlDashboard = new URL('/pages/dashboard', request.url);
    const urlRegister = new URL('/pages/register', request.url);
    const urlAlterar = new URL('/pages/alterar', request.url);


    if (isTokenValidated) {
        if (request.nextUrl.pathname === '/') {
            return NextResponse.redirect(urlDashboard);
        }
    }


        if (!isTokenValidated || !token) {
        if (request.nextUrl.pathname === '/pages/register' || request.nextUrl.pathname === '/pages/alterar') {
            return NextResponse.redirect(urlLogin);
        }
    }

     if (!isTokenValidated || !token) {
        if (request.nextUrl.pathname === '/pages/dashboard') {
            return NextResponse.redirect(urlLogin);
        }

    }
    NextResponse.next();
};

export const config = {
    matcher: ['/', '/pages/dashboard', '/pages/register', '/pages/alterar']
};
