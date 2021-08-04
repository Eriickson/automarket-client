import { getAuthSsr } from "@/auth";
import { ProvidersProps } from "@/shared";
import { GetServerSideProps } from "next";

/* eslint-disable @typescript-eslint/no-empty-interface */
interface IndexProps extends ProvidersProps {}

export const indexServerSide: GetServerSideProps = async ctx => {
  const auth = await getAuthSsr({ ctx });

  const props: IndexProps = {
    authProviderProps: { ...auth },
  };

  return { props };
};
