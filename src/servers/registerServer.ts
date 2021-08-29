import { GetServerSideProps } from "next";

// Packages
import jwt from "jsonwebtoken";

// My Elements
import { redirectSSR } from "@/utils";

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
    const payload = jwt.verify(String(token), "MY-SECRECT-KEY") as { email: string };

    email = payload.email;
  } catch (err) {
    console.log(err);
    redirectSSR(ctx);
  }

  const props: RegisterPageProps = { email };

  return { props };
};
