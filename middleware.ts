import { NextResponse, NextRequest } from 'next/server'
export const config = {
    matcher: '/details',
  }
export async function middleware(req) {
    const { pathname, search, ...res } = req.nextUrl


    // const urlSearchParams = new URLSearchParams(search);
    console.log(req.nextUrl.searchParams.get('status'), "3333ASDASDASD");
    const paramStatus = req.nextUrl.searchParams.get('status')
    if (paramStatus !== 'success') {
        return NextResponse.redirect(new URL('/error', req.url))
    }
    return NextResponse.next()
}