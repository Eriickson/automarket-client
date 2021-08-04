import { getAuthSsr } from "@/auth";
import { GetServerSideProps } from "next";
import React, { FC } from "react";

const Authentication: FC = () => {
  return <div>Authentication</div>;
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  await getAuthSsr({ ctx });
  return { props: {} };
};

export default Authentication;
