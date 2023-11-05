//Protects entire site with nextauth
export { default } from 'next-auth/middleware'

export const config = { matcher: ["/pages/loginPage", "/pages/serverPage"] }
