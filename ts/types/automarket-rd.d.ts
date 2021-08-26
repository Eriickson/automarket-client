declare module "@automarket-rd/server" {
  import { GetServerSidePropsResult, NextApiRequest, NextApiResponse } from "next";
  import { Session, withIronSession } from "next-iron-session";

  type NextIronRequest = NextApiRequest & { session: Session };

  export type GetServerSidePropsContext = { req: NextIronRequest; res: NextApiResponse };

  export type GetServerSideProps<T> = (ctx: GetServerSidePropsContext) => Promise<GetServerSidePropsResult<T>>;

  export function withSession(handler: GetServerSideProps): void {
    return withIronSession(handler, {
      password: "MY_PASSWORD_SESSION",
      cookieName: "session",
      // if your localhost is served on http:// then disable the secure flag
      cookieOptions: {
        secure: process.env.NODE_ENV === "production",
        httpOnly: true,
      },
    });
  }
}
