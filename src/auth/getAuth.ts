import axios from "axios";
import { GetServerSidePropsContext, AuthPayload } from "@/shared";
import { envs } from "@/config";

interface IAuthParams {
  ctx: GetServerSidePropsContext;
  privateRouter?: boolean | string;
  publicRouter?: boolean | string;
}

export async function getAuth({ ctx, privateRouter, publicRouter }: IAuthParams): Promise<AuthPayload> {
  try {
    const { data } = await axios.get<AuthPayload>(`${envs.BASE_URL}/api/auth/access-token`, {
      headers: ctx.req.headers,
    });

    const { isAuth } = data;
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

    const response: AuthPayload = { isAuth };

    isAuth && Object.assign(response, data);

    return response;
  } catch (err: any) {
    return {
      isAuth: false,
    };
  }
}
