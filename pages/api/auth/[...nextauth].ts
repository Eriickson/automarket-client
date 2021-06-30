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
        const user: User = {
          _id: "user-id-001",
          name: "Erickson Manuel",
          lastname: "Holguín",
          email: credentials.identifier,
          username: "test@test.comssss",
          profilePicture: "https://zone1-d9f7.kxcdn.com/wp-content/uploads/2013/12/person2-500x500.jpg",
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
  // callbacks: {
  //   jwt(token: JWT, user) {
  //     console.log({ user });

  //     token._id = user?._id;
  //     token.name = user?.name;
  //     token.lastname = user?.lastname;
  //     token.email = user?.email;
  //     token.username = user?.username;
  //     token.profilePicture = user?.profilePicture;
  //     console.log({ token });

  //     return token;
  //   },
  //   async session(session, userOrToken) {
  //     console.log({ session, userOrToken });
  //     session.edad = 19;
  //     return session;
  //   },
  // },
});

/* const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
        .then(json => json);

        console.log({response}); */
