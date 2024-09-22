import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Configuração do NextAuth.js
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});

// Exportação para as rotas GET e POST
export { handler as GET, handler as POST };
