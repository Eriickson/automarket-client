import { GetServerSideProps } from "next";

// Packages
import jwt from "jsonwebtoken";

// My Elements
import { redirectSSR } from "@/utils";
import { envs } from "@/config";

// My Components
// import { SEOProps } from "@/components";

export interface RegisterPageProps {
  email: string;
}

export const registerServerSide: GetServerSideProps = async ctx => {
  const { token } = ctx.query;
  let email = "";
  if (!token) {
    redirectSSR(ctx);
  }

  try {
    const payload = jwt.verify(String(token), envs.SECRECT_KEY_SIGNUP_TOKEN) as { email: string };

    email = payload.email;
  } catch (err) {
    redirectSSR(ctx);
  }

  const props: RegisterPageProps = { email };

  return { props };
};
