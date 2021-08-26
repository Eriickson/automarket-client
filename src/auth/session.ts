// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import { GetServerSideProps, NextApiRequest, NextApiResponse } from "next";
import { Session, withIronSession } from "next-iron-session";

// optionally add stronger typing for next-specific implementation
export type NextIronRequest = NextApiRequest & { session: Session };
export type NextIronHandler = (req: NextIronRequest, res: NextApiResponse) => void | Promise<void>;

const withSession = (handler: GetServerSideProps) =>
  withIronSession(handler, {
    password: "MY_PASSWORD_SESSION",
    cookieName: "session",
    // if your localhost is served on http:// then disable the secure flag
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
    },
  });

// export default withSession;
