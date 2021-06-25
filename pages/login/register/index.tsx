import { NextPage } from "next";
import React, { useEffect } from "react";

import { RegisterTemplate } from "@/templates";
import { RegisterPageProps } from "@/servers";

const RegisterPage: NextPage<RegisterPageProps> = ({ email }) => {
  useEffect(() => {
    console.log(email);
  }, []);

  return <RegisterTemplate />;
};


export { registerServerSide as getServerSideProps } from "@/servers";
export default RegisterPage;
