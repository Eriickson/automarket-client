import React from "react";

import { NextPage } from "next";

import { SignUpTemplate } from "@/templates";
import { SEO } from "@/components";

const SignUpPage: NextPage = () => {
  return (
    <SEO desc="Automarket RD" title="Crea tu cuenta">
      <SignUpTemplate />
    </SEO>
  );
};

export default SignUpPage;
