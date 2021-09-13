import { authorization } from "@/auth";
import { getApolloClient } from "@/graphql";
import { GetServerSideProps, Plan, ProvidersProps } from "@/shared";
import { GetPlansPayload, GET_PLANS_Q } from "src/graphql/gql";

export interface PlansProps extends ProvidersProps {
  plans: Plan[];
}

export const plansServerSide: GetServerSideProps<PlansProps> = async ctx => {
  const auth = await authorization({ ctx, roles: ["ALL"] });
  const { client } = getApolloClient({ token: auth.accessToken });

  const { data } = await client.query<GetPlansPayload>({ query: GET_PLANS_Q });

  const props: PlansProps = {
    authProviderProps: auth,
    seo: {
      title: "Inicio - Automarket rd",
      desc: "Esta es la descripción",
    },
    plans: data.getPlans.plans,
  };

  return { props };
};
