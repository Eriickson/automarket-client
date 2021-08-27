import axios from "axios";
import { GetServerSidePropsContext, IAuth } from "@/shared";

interface IAuthParams {
  ctx: GetServerSidePropsContext;
  privateRouter?: boolean | string;
  publicRouter?: boolean | string;
}

export async function getAuth({ ctx, privateRouter, publicRouter }: IAuthParams) {
  try {
    const { data } = await axios.get<IAuth>("http://localhost:9000/api/auth/access-token", {
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
  } catch (err: any) {
    console.log(err.response.data);
  }
}
