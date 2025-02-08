// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isAuthenticated } from './utils/auth';

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  console.log(`Middleware executed for path: ${pathname}`); // Log the requested path

  // Define public routes (e.g., sign-in)
  const publicRoutes = ['/signin'];
  const isPublicRoute = publicRoutes.some((route) => pathname.startsWith(route));

  // Check if the user is authenticated
  const isLoggedIn = isAuthenticated({ req: request });
  console.log(`Is user authenticated? ${isLoggedIn}`); // Log the authentication status

  // If the user is not logged in and tries to access a protected route, redirect to /signin
  if (!isLoggedIn && !isPublicRoute) {
    console.log('Redirecting to /signin'); // Log the redirection
    const signInUrl = new URL('/signin', request.url);
    return NextResponse.redirect(signInUrl);
  }

  // Allow the request to proceed
  console.log('Allowing request to proceed'); // Log the allowed request
  // return NextResponse.next();
  // Disable caching for dynamic routes
  const response = NextResponse.next();
  response.headers.set('Cache-Control', 'no-store');
  return response;
}

// Match all routes except static assets
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};



















// // // middleware.ts
// // import { NextResponse } from 'next/server';
// // import type { NextRequest } from 'next/server';
// // import { isAuthenticated } from './src/utils/auth';

// // export async function middleware(request: NextRequest) {
// //   const pathname = request.nextUrl.pathname;

// //   console.log(`Middleware executed for path: ${pathname}`); // Log the requested path

// //   // Define public routes (e.g., sign-in)
// //   const publicRoutes = ['/signin'];
// //   const isPublicRoute = publicRoutes.some((route) => pathname.startsWith(route));

// //   // Check if the user is authenticated
// //   const isLoggedIn = isAuthenticated({ req: request });
// //   console.log(`Is user authenticated? ${isLoggedIn}`); // Log the authentication status

// //   // If the user is not logged in and tries to access a protected route, redirect to /signin
// //   if (!isLoggedIn && !isPublicRoute) {
// //     console.log('Redirecting to /signin'); // Log the redirection
// //     const signInUrl = new URL('/signin', request.url);
// //     return NextResponse.redirect(signInUrl);
// //   }

// //   // Allow the request to proceed
// //   console.log('Allowing request to proceed'); // Log the allowed request
// //   const response = NextResponse.next();
// //   response.headers.set('Cache-Control', 'no-store');
// //   return response;
// //   // return NextResponse.next();
// // }

// // // Match all routes except static assets
// // export const config = {
// //   matcher: [
// //     '/((?!_next/static|_next/image|favicon.ico).*)',
// //   ],
// // };
















// // // middleware.ts
// // import { NextResponse } from 'next/server';
// // import type { NextRequest } from 'next/server';
// // import { isAuthenticated } from './src/utils/auth';

// // export async function middleware(request: NextRequest) {
// //   const pathname = request.nextUrl.pathname;

// //   // Define public routes (e.g., sign-in)
// //   const publicRoutes = ['/signin'];
// //   const isPublicRoute = publicRoutes.some((route) => pathname.startsWith(route));

// //   // Check if the user is authenticated
// //   const isLoggedIn = isAuthenticated({ req: request });

// //   // If the user is not logged in and tries to access a protected route, redirect to /signin
// //   if (!isLoggedIn && !isPublicRoute) {
// //     const signInUrl = new URL('/signin', request.url);
// //     return NextResponse.redirect(signInUrl);
// //   }

// //   // Allow the request to proceed
// //   return NextResponse.next();
// // }

// // // Match all routes except static assets
// // export const config = {
// //   matcher: [
// //     '/((?!_next/static|_next/image|favicon.ico).*)',
// //   ],
// // };
















// // middleware.ts
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import { isAuthenticated } from './src/utils/auth';

// export async function middleware(request: NextRequest) {
//   const pathname = request.nextUrl.pathname;

//   console.log(`Middleware executed for path: ${pathname}`); // Log the requested path

//   // Define public routes (e.g., sign-in, sign-up)
//   const publicRoutes = ['/signin', '/signup'];
//   const isPublicRoute = publicRoutes.some((route) => pathname.startsWith(route));

//   // Check if the user is authenticated
//   const isLoggedIn = isAuthenticated({ req: request });
//   console.log('...isLoggedIn...', isLoggedIn)

//   // If the user is not logged in and tries to access a protected route, redirect to /signin
//   if (!isLoggedIn && !isPublicRoute) {
//     const signInUrl = new URL('/signin', request.url);
//     return NextResponse.redirect(signInUrl);
//   }

//   // If the user is logged in but tries to access a public route (e.g., /signin), redirect to /dashboard
//   if (isLoggedIn && isPublicRoute) {
//     const dashboardUrl = new URL('/dashboard', request.url);
//     return NextResponse.redirect(dashboardUrl);
//   }

//   // Allow the request to proceed
//   return NextResponse.next();
// }

// // Match all routes except static assets
// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      */
//     '/((?!_next/static|_next/image|favicon.ico).*)',
//   ],
// };