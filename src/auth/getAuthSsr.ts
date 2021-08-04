import { getSession } from "next-auth/client";
import { GetServerSidePropsContext } from "next";
import { ISession } from "@/shared";

interface IAuthParams {
  ctx: GetServerSidePropsContext;
  privateRouter?: boolean | string;
  publicRouter?: boolean | string;
}

interface IAuthSession {
  user: {
    token: string;
    user: any;
    agency: any;
    expireToken: string;
  };
}

interface IAuth {
  isAuth: boolean;
  session?: IAuthSession;
}

export async function getAuthSsr({ ctx, publicRouter, privateRouter }: IAuthParams): Promise<IAuth> {
  let isAuth = false;
  let session: ISession;
  try {
    session = (await getSession(ctx)) as unknown as ISession;

    isAuth = Boolean(session);

    if (privateRouter && !isAuth) {
      ctx.res.writeHead(302, { Location: typeof privateRouter === "string" ? privateRouter : "/" });
      ctx.res.end();
      return { isAuth };
    }

    if (publicRouter && isAuth) {
      ctx.res.writeHead(302, { Location: typeof publicRouter === "string" ? publicRouter : "/" });
      ctx.res.end();
      return { isAuth };
    }
    const comodinSession: any = session;
    return {
      isAuth,
      session: {
        user: {
          agency: {},
          expireToken: comodinSession.user.expireToken,
          token: comodinSession.user.token,
          user: comodinSession.user.user,
        },
      },
    };
  } catch (err) {
    console.log(err);
    isAuth = false;
    return {
      isAuth,
    };
  }
}
