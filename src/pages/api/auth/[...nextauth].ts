import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "john@gmail.com" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const user: any = {
          id: 1,
          email,
          name: "usernameDummy",
          password,
        };

        if (user) return user;
        else return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile, user }: any) {
      if (account?.providers === "credentials") {
        token.email = user.email;
        token.name = user.name;
      }

      return token;
    },
    session({ session, token }: any) {
      if ("email" in token) session.user.email = token.email;
      if ("name" in token) session.user.name = token.name;

      return session;
    },
  },
};

export default NextAuth(authOptions);
