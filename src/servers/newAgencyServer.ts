import { getAuthSsr } from "@/auth";
import { ProvidersProps } from "@/shared";
import { GetServerSideProps } from "next";

/* eslint-disable @typescript-eslint/no-empty-interface */
interface NewAgencyProps extends ProvidersProps {}

export const newAgencyServerSide: GetServerSideProps = async ctx => {
  const auth = await getAuthSsr({ ctx });

  const props: NewAgencyProps = {
    authProviderProps: { ...auth },
  };

  return { props };
};
