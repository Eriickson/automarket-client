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
  console.log(token);
  
  let email = "";
  if (!token) {
    redirectSSR(ctx);
  }

  try {
    console.log(envs.SECRECT_KEY_SIGNUP_TOKEN);

    const payload = jwt.verify(String(token), "SECRECT_KEY_SIGNUP_TOKEN") as { email: string };

    email = payload.email;
  } catch (err) {
    console.log(err);
    
    redirectSSR(ctx);
  }

  const props: RegisterPageProps = { email };

  return { props };
};
