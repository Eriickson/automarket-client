import React from "react";

import { NextPage } from "next";

import { SignInTemplate } from "@/templates";
import { SEO } from "@/components";

const SignInPage: NextPage = () => {
  return (
    <SEO desc="Automarket RD" title="Ingresa a tu cuenta">
      <SignInTemplate />
    </SEO>
  );
};

export { signinServerSide as getServerSideProps } from "@/servers";
export default SignInPage;
