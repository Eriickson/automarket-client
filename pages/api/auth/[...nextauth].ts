import moment from "moment";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

type SignInType = {
  identifier: string;
  password: string;
};

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: "Iv1.82b8c7d8151f46df",
      clientSecret: "2c2c8a10fa99d16fb4b28fc301d4f5c24297e84e",
    }),
    Providers.Credentials({
      name: "Credentials",
      async authorize(credentials: SignInType) {
        // Add logic here to look up the user from the credentials supplied
        const { identifier, password } = credentials;

        const user = {
          user: { id: 1, identifier: "erickson01d@gmail.com", password: "123456789e" },
          agency: {
            id: "f93cc98f-0d0e-47f8-a9c5-ac381393305a",
            name: "Agencia de carros",
            image: "image-de-la-agencia",
          },
          expireToken: moment().add(15, "minutes").format(),
        };

        if (user.user.identifier === identifier && user.user.password === password) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null or false then the credentials will be rejected
          // You can also Reject this callback with an Error or with a URL:
          // throw new Error('error message') // Redirect to error page
          // throw '/path/to/redirect'        // Redirect to a URL
          throw new Error("No inició Sesión");
        }
      },
    }),
  ],
  pages: {
    signIn: "/login/signin",
  },
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 60,
  },
  callbacks: {
    async jwt(token: any, user) {
      user && (token.user = user);
      const now = moment(moment().format());
      const exp = moment(moment(token.user.expireToken).format());
      const diff = exp.diff(now) / 1000 / 60;
      if (diff < 0) {
        console.log("El token está vencido");
      } else {
        console.log("El token no se ha vencido");
      }

      return Promise.resolve(token);
    },
    async session(session: any, token) {
      session.user = token.user;
      return Promise.resolve(session);
    },
  },
});
