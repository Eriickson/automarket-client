import { getAuthSsr } from "@/auth";
import { ProvidersProps } from "@/shared";
import { GetServerSideProps } from "next";

/* eslint-disable @typescript-eslint/no-empty-interface */
interface SignUpProps extends ProvidersProps {}

export const signUpServerSide: GetServerSideProps = async ctx => {
  const auth = await getAuthSsr({ ctx, publicRouter: true });

  const props: SignUpProps = {
    authProviderProps: { ...auth },
  };

  return { props };
};
