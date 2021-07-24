import { NextPage } from "next";
import React, { useEffect } from "react";

import { RegisterTemplate } from "@/templates";
import { RegisterPageProps } from "@/servers";
import { useAction } from "@/store";
import { SEO } from "@/components";

const RegisterPage: NextPage<RegisterPageProps> = ({ email }) => {
  const { setEmailNewUser } = useAction();
  setEmailNewUser(email);

  return (
    <SEO desc="Automarket RD" title="Crea tu cuenta">
      <RegisterTemplate />
    </SEO>
  );
};

export { registerServerSide as getServerSideProps } from "@/servers";
export default RegisterPage;
