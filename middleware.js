import { NextResponse, NextRequest } from 'next/server'
export const config = {
    matcher: '/details',
  }
export async function middleware(req) {
    const { searchParams } = req.nextUrl

    const paramStatus = searchParams.get('status')
    if (paramStatus !== 'success') {
        return NextResponse.redirect(new URL('/error', req.url))
    }
    return NextResponse.next()
}