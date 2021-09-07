import React from "react";
import { GetServerSideProps } from "@/shared";
import { authorization } from "@/auth";

const Auth = () => {
  return <div>Auth</div>;
};

interface AuthProps {
  ping: string;
}

export const getServerSideProps: GetServerSideProps<AuthProps> = async ctx => {
  try {
    await authorization({ ctx, roles: ["USER"] });
  } catch (err) {
    console.log(err);
  }
  return {
    props: { ping: "Pong" },
  };
};

export default Auth;
