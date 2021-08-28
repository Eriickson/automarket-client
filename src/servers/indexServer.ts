import { getAuth } from "@/auth";
import { GetServerSideProps, ProvidersProps } from "@/shared";

/* eslint-disable @typescript-eslint/no-empty-interface */
interface IndexProps extends ProvidersProps {}

export const indexServerSide: GetServerSideProps<IndexProps> = async ctx => {
  const auth = await getAuth({ ctx });

  const props: IndexProps = {
    authProviderProps: auth,
    seo: {
      title: "Este es el título",
      desc: "Esta es la descripción",
    },
  };
  return { props };
  return { props };
};
