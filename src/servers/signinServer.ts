import { getAuth } from "@/auth";
import { ProvidersProps, GetServerSideProps } from "@/shared";

/* eslint-disable @typescript-eslint/no-empty-interface */
interface SigninProps extends ProvidersProps {}

export const signinServerSide: GetServerSideProps<SigninProps> = async ctx => {
  const auth = await getAuth({ ctx, publicRouter: true });
  return {
    props: {
      authProviderProps: auth,
      seo: {
        title: "Ingresa a tu cuenta",
        desc: "Hola",
      },
    },
  };
};
