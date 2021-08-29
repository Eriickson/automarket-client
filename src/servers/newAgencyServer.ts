import { getAuth } from "@/auth";
import { GetServerSideProps, ProvidersProps } from "@/shared";

/* eslint-disable @typescript-eslint/no-empty-interface */
interface NewAgencyProps extends ProvidersProps {}

export const newAgencyServerSide: GetServerSideProps<NewAgencyProps> = async ctx => {
  const auth = await getAuth({ ctx, privateRouter: true });

  const props: NewAgencyProps = {
    authProviderProps: { ...auth },
    seo: { title: "Crea tu agencía", desc: "Completa todos los pasos para crear tu agencía" },
  };

  return { props };
};
