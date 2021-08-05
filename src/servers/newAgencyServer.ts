import { getAuthSsr } from "@/auth";
import { ProvidersProps } from "@/shared";
import { GetServerSideProps } from "next";

/* eslint-disable @typescript-eslint/no-empty-interface */
interface NewAgencyProps extends ProvidersProps {}

export const newAgencyServerSide: GetServerSideProps = async ctx => {
  const auth = await getAuthSsr({ ctx, privateRouter: true });

  const props: NewAgencyProps = {
    authProviderProps: { ...auth },
    seo: { title: "Crea tu agencía", desc: "Completa todos los pasos para crear tu agencía" },
  };

  return { props };
};
