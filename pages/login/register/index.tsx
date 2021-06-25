import { NextPage } from "next";
import React, { useEffect } from "react";

import { RegisterTemplate } from "@/templates";
import { RegisterPageProps } from "@/servers";
import { useAction } from "@/store";

const RegisterPage: NextPage<RegisterPageProps> = ({ email }) => {
  const { setEmailNewUser } = useAction();
  setEmailNewUser(email);


  return <RegisterTemplate />;
};

export { registerServerSide as getServerSideProps } from "@/servers";
export default RegisterPage;
