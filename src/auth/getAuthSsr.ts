import { getSession } from "next-auth/client";
import { GetServerSidePropsContext } from "next";
import { ISession } from "@/shared";

interface IAuthParams {
  ctx: GetServerSidePropsContext;
  privateRouter?: boolean | string;
  publicRouter?: boolean | string;
}

interface GetAuthSsrReturn {
  isAuth: boolean;
  session?: ISession;
}

export async function getAuthSsr({ ctx, publicRouter, privateRouter }: IAuthParams): Promise<GetAuthSsrReturn> {
  let isAuth = false;
  try {
    /* eslint-disable-next-line */
    const { user } = (await getSession(ctx)) as unknown as any;

    isAuth = Boolean(user);

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

    return {
      isAuth: isAuth,
      session: user.session || {},
    };
  } catch (err) {
    isAuth = false;
    return {
      isAuth,
    };
  }
}
