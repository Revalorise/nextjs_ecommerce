import NextAuth, {NextAuthConfig} from "next-auth";
import {PrismaAdapter} from "@auth/prisma-adapter";
import prisma from "@/db/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import {compareSync} from "bcrypt-ts-edge";

export const config = {
    // Define pages for authentication flow
    pages: {
        signIn: "/sign-in", // Custom sign-in page
        error: "/sign-in", // Redirect to sign-in page on error
    },
    // Configure session management
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // Expires after 30 days
        updateAge: 24 * 60 * 60, // Update every 24 hours if active
    },
    adapter: PrismaAdapter(prisma),
    providers: [CredentialsProvider({
        // Define the input fields expected for this provider (email and password)
        credentials: {
            email: {type: 'email'},
            password: {type: 'password'},
        },
        // The core logic for authorizing users
        async authorize(credentials) {
            if (credentials == null) return null;

            // Find user in database
            const user = await prisma.user.findFirst({
                where: {
                    email: credentials.email as string,
                },
            });

            // Check if the user exists and if the password is correct
            if (user && user.password) {
                const isValidPassword = compareSync(credentials.password as string, user.password);

                // If the password is valid, return the user object
                if (isValidPassword) {
                    return {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        image: user.image,
                        role: user.role,
                    };
                }
            }
            // If the user doesn't exist or the password is incorrect, return null
            return null;
        }
    })],
    // Callbacks for customizing the behavior of NextAuth
    callbacks: {
        async session({session, user, trigger, token}: any) {
            // Set the user ID from the token
            session.user.id = token.sub;

            // If there is an update, set the user's name
            if (trigger === 'update') {
                session.user.name = user.name;
            }

            return session;
        }
    }
} satisfies NextAuthConfig;

export const {handlers, auth, signIn, signOut} = NextAuth(config);
