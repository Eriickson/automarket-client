import { ProvidersProps } from "@/shared";
import { GetServerSideProps } from "next";

/* eslint-disable @typescript-eslint/no-empty-interface */
interface SignUpProps {}

export const signUpServerSide: GetServerSideProps = async ctx => {
  const props: SignUpProps = {};

  return { props };
};
