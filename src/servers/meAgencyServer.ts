import { authorization } from "@/auth";
import { getApolloClient } from "@/graphql";
import { GetServerSideProps, ProvidersProps, Agency } from "@/shared";
import { GET_MY_AGENCY_Q, GetMyAgencyPayload } from "src/graphql/gql/queries/GetMyAgency";

export interface MeAgencyProps extends ProvidersProps {
  myAgency: Agency;
}

export const meAgencyServerSide: GetServerSideProps<MeAgencyProps> = async ctx => {
  const auth = await authorization({ ctx, roles: ["AGENCY"], redirect: "/me" });

  const { client } = getApolloClient({ token: auth.accessToken });

  const response = await client.query<GetMyAgencyPayload>({ query: GET_MY_AGENCY_Q });
  console.log({ auth });

  const props: MeAgencyProps = {
    authProviderProps: auth,
    seo: {
      title: response.data.getMyAgency.name + " - automarket RD",
      desc: "Esta es la descripción",
    },
    myAgency: response.data.getMyAgency,
  };
  return { props };
};
