import { getAuthSsr } from "@/auth";
import { ProvidersProps } from "@/shared";
import { GetServerSideProps } from "next";

/* eslint-disable @typescript-eslint/no-empty-interface */
interface SeacherAgenciesProps extends ProvidersProps {}

export const seacherAgenciesServerSide: GetServerSideProps = async ctx => {
  const auth = await getAuthSsr({ ctx });

  const props: SeacherAgenciesProps = {
    authProviderProps: { ...auth },
  };

  return { props };
};
