import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "Your Username"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Your password"
                }
            },
            async authorize(credentials) {
                //This is where you would usually retrieve user data from a database you own
                //to verify credentials 
                //Docs: https://next-auth.js.org/configuration/providers/credentials

                const user = { id: "1", name: "Arthur", password: "nextauth" };

                if (credentials?.username === user.name && credentials?.password == user.password) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
    // pages: {
    //provide the pages
    // }
}