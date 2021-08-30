import axios from "axios";
import { GetServerSidePropsContext, AuthPayload } from "@/shared";
import { envs } from "@/config";

interface IAuthParams {
  ctx: GetServerSidePropsContext;
  privateRouter?: boolean | string;
  publicRouter?: boolean | string;
}

export async function getAuth({ ctx, privateRouter, publicRouter }: IAuthParams): Promise<AuthPayload> {
  console.log(`${envs.BASE_URL}/api/auth/access-token`);

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

    return {
      isAuth,
      accessToken: data.accessToken,
      user: data.user,
    };
  } catch (err: any) {
    console.log({ Aqui: err.response.data });
    return {
      isAuth: false,
    };
  }
}
