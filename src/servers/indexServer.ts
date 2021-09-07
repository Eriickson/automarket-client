import { authorization } from "@/auth";
import { GetServerSideProps, ProvidersProps } from "@/shared";

/* eslint-disable @typescript-eslint/no-empty-interface */
interface IndexProps extends ProvidersProps {}

export const indexServerSide: GetServerSideProps<IndexProps> = async ctx => {
  const auth = await authorization({ ctx, roles: ["ALL"] });

  const props: IndexProps = {
    authProviderProps: auth,
    seo: {
      title: "Inicio - Automarket rd",
      desc: "Esta es la descripción",
    },
  };
  return { props };
};
