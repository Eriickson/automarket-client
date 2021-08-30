import { GetServerSidePropsResult, NextApiRequest, NextApiResponse } from "next";
import { Session, SessionOptions, withIronSession } from "next-iron-session";
import { ProvidersProps } from ".";

type NextIronRequest = NextApiRequest & { session: Session };

export type GetServerSidePropsContext = { req: NextIronRequest; res: NextApiResponse };

export type GetServerSideProps<T> = (ctx: GetServerSidePropsContext) => Promise<GetServerSidePropsResult<T>>;

/* eslint-disable-next-line */
// export function withSession<T>(handler: GetServerSideProps<T>, options?: SessionOptions) {
//   return withIronSession(handler, {
//     password: "8200f37e-b2c7-4a0d-9587-22102dbedfc0-707d7da9-95e9-4955-a7c6-038a53c6b64",
//     cookieName: "session",
//     cookieOptions: {
//       secure: process.env.NODE_ENV === "production",
//       httpOnly: true,
//     },
//   });
// }
