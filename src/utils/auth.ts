// utils/auth.ts
export const isAuthenticated = ({ req }: { req?: any }) => {
  const token = req?.cookies?.get('authToken')?.value; // Access the cookie directly
  console.log(`Checking authentication. Token found: ${!!token}`); // Log the token status
  return !!token;
};













// // src/utils/auth.ts
// import { parseCookies } from 'nookies';

// // export const isAuthenticated = (context?: any) => {
//   export const isAuthenticated = ({ req }: { req?: any }) => {
//   // const cookies = parseCookies(context);
//   const cookies = parseCookies({req});
//   console.log('...cookies...', cookies);
//   const token = cookies['authToken']; // Replace 'authToken' with your actual token key
//   console.log(`Checking authentication. Token found: ${!!token}`, token); // Log the token status
//   return !!token; // Return true if token exists, false otherwise
// };














// // // utils/auth.ts
// // import { parseCookies } from 'nookies';

// // export const isAuthenticated = (context?: any) => {
// //   const cookies = parseCookies(context);
// //   const token = cookies['authToken']; // Replace 'authToken' with your actual token key
// //   return !!token; // Return true if token exists, false otherwise
// // };