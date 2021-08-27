// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import { NextApiRequest, NextApiResponse } from "next";
import { Session, SessionOptions, withIronSession } from "next-iron-session";

// optionally add stronger typing for next-specific implementation
export type NextIronRequest = NextApiRequest & { session: Session };
export type NextIronHandler = (req: NextIronRequest, res: NextApiResponse) => void | Promise<void>;

/* eslint-disable-next-line */
export const withSession = (
  handler: NextIronHandler,
  options: SessionOptions = {
    password: "MY_PASSWORD_SESSION",
    cookieName: "session",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
    },
  },
) => {
  return withIronSession(handler, options);
};

// export default withSession;
