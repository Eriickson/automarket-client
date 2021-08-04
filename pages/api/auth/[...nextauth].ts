import moment from "moment";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { getApolloClient } from "@/graphql";
import { SignInPayload, SignInVariables, SIGNIN_Q } from "src/graphql/gql";
import jwt from "jsonwebtoken";
import { ISession } from "@/shared";

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
        const { client } = getApolloClient();
        // Add logic here to look up the user from the credentials supplied
        const { identifier, password } = credentials;

        const { data } = await client.query<SignInPayload, SignInVariables>({
          query: SIGNIN_Q,
          variables: { identifier, password },
        });

        const { iat, ...user } = jwt.verify(data.signIn.token, "MY_SCRECT_KEY") as ISession["user"] & {
          iat: number;
        };

        const session: ISession = {
          token: data.signIn.token,
          user,
          updateAge: moment().add(15, "minutes").format(),
          maxAge: moment().add(7, "days").format(),
        };

        return { session };
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
      /*  if (diff < 0) {
      } else {
      } */

      return Promise.resolve(token);
    },
    async session(session: any, token) {
      session.user = token.user;
      return Promise.resolve(session);
    },
  },
});
