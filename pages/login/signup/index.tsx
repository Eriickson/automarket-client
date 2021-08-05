import React from "react";

import { NextPage } from "next";

import { SignUpTemplate } from "@/templates";
import { SEO } from "@/components";

const SignUpPage: NextPage = () => {
  return (
    <SEO desc="Automarket RD" title="Regístrate">
      <SignUpTemplate />
    </SEO>
  );
};

export { signUpServerSide as getServerSideProps } from "@/servers";
export default SignUpPage;
