import { ProvidersProps } from "@/shared";
import { GetServerSideProps } from "next";

/* eslint-disable @typescript-eslint/no-empty-interface */
interface SigninProps extends ProvidersProps {}

export const signinServerSide: GetServerSideProps = async ctx => {
  return { props: {} };
};
