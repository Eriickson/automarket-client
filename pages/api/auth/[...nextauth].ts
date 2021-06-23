import NextAuth, { User } from "next-auth";
import { JWT } from "next-auth/jwt";
import Providers from "next-auth/providers";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: "Iv1.82b8c7d8151f46df",
      clientSecret: "c4c0a75474db6b4ddb0d84908f40a5fb6ee7d944",
    }),
    Providers.Credentials({
      name: "Credentials",
      async authorize(credentials: { identifier: string; password: string }) {
        console.log({ credentials });

        const user: User = {
          id: "id-001",
          name: "Test Name",
          email: "test@test.comssss",
          image: "https://zone1-d9f7.kxcdn.com/wp-content/uploads/2013/12/person2-500x500.jpg",
          edad: "mis-19-añiodsadasds",
          sexo: "Masculino",
        };
        return user;

        // throw `/login?error=${msgError}`;
      },
    }),
  ],
  database: "mongodb://localhost:27017/mydb",
  pages: {
    signIn: "/login/signin",
    error: "/login/error",
  },
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 60 * 60 * 24, // 24 hours
  },
  callbacks: {
    jwt(token: JWT, user) {
      token.edad = user?.edad;
      token.sexo = user?.sexo;
      token.image = user?.image;

      console.log({ token });

      return token;
    },
    async session(session) {
      console.log({ session });

      return {
        expires: session.expires,
        user: {
          ...session.user,
          edad: "esta es la edad del chico",
          agency: "id-agency",
        },
      };
    },
  },
});
