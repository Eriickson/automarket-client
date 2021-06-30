import React from "react";
import { useSession, getSession } from "next-auth/client";
import { GetServerSideProps } from "next";
import { getAuthSsr } from "@/auth";

const VerifyLogin = () => {
  const [session, loading] = useSession();

  return <div>VerifyLogin</div>;
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const response = await getAuthSsr({ ctx, privateRouter: "/" });
  return {
    props: {},
  };
};

export default VerifyLogin;
