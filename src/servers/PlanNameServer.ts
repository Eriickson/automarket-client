import { authorization } from "@/auth";
import { GetServerSideProps, ProvidersProps } from "@/shared";

/* eslint-disable @typescript-eslint/no-empty-interface */
export interface PlanNamePageProps extends ProvidersProps {}

export const planNameServerSide: GetServerSideProps<PlanNamePageProps> = async ctx => {
  const auth = await authorization({ ctx, roles: ["ALL"] });

  const props: PlanNamePageProps = {
    authProviderProps: auth,
    seo: {
      title: "Adquirir un plan",
      desc: "Esta es la descripción",
    },
  };
  return { props };
};
