import React from "react";

import { GetServerSideProps, NextPage } from "next";

import { SignInTemplate } from "@/templates";
import { SEO } from "@/components";
import { getAuthSsr } from "@/auth";

const SignInPage: NextPage = () => {
  return (
    <SEO desc="Automarket RD" title="Ingresa a tu cuenta">
      <SignInTemplate />
    </SEO>
  );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { isAuth, session } = await getAuthSsr({ ctx, publicRouter: true });
  console.log({ isAuth, session });

  return {
    props: {},
  };
};

export default SignInPage;
