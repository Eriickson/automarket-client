import { GetServerSidePropsContext } from "next";

type redirectSSR = {
  location: string;
};

export function redirectSSR(ctx: GetServerSidePropsContext, options?: redirectSSR): void {
  const location = options?.location || "/";
  ctx.res.writeHead(302, { Location: location });
  ctx.res.end();
  return;
}
