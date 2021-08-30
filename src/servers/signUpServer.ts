import { getAuth } from "@/auth";
import { ProvidersProps, GetServerSideProps } from "@/shared";

/* eslint-disable @typescript-eslint/no-empty-interface */
export interface SignUpProps extends ProvidersProps {}

export const signUpServerSide: GetServerSideProps<SignUpProps> = async ctx => {
  const auth = await getAuth({ ctx, publicRouter: true });

  const props: SignUpProps = {
    authProviderProps: auth,
    seo: {
      title: "Regístrate",
      desc: "Crea una cuenta nueva",
    },
  };

  return { props };
};
