import { NextResponse } from 'next/server'

const protectedRoutes = [
  '/feed',
  '/search',
  '/create',
  '/inbox',
  '/profile',
  '/wallet',
  '/notifications',
  '/listings',
  '/vendor',
]

const authRoutes = ['/', '/login', '/signup', '/verify', '/interests']

export function middleware(request) {
  const { pathname } = request.nextUrl
  const authSession = request.cookies.get('omi-session')
  const isAuthenticated = !!authSession?.value

  // Authenticated user trying to access auth routes — send to feed
  if (isAuthenticated && authRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/feed', request.url))
  }

  // Unauthenticated user trying to access protected routes — send to welcome
  if (!isAuthenticated && protectedRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}