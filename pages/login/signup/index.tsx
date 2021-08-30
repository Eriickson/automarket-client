import React from "react";

import { NextPage } from "next";

import { SignUpTemplate } from "@/templates";
import { SignUpProps } from "@/servers";

const SignUpPage: NextPage<SignUpProps> = () => {
  return <SignUpTemplate />;
};

export { signUpServerSide as getServerSideProps } from "@/servers";
export default SignUpPage;
