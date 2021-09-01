import { getAuth } from "@/auth";
import { getApolloClient } from "@/graphql";
import { GetServerSideProps, ProvidersProps } from "@/shared";
import { GET_MY_AGENCY_Q, Agency, GetMyAgencyPayload } from "src/graphql/gql/queries/GetMyAgency";

export interface MeAgencyProps extends ProvidersProps {
  agency: Agency;
}

export const meAgencyServerSide: GetServerSideProps<MeAgencyProps> = async ctx => {
  const auth = await getAuth({ ctx, privateRouter: true });

  const { client } = getApolloClient({ token: auth.accessToken });

  const response = await client.query<GetMyAgencyPayload>({ query: GET_MY_AGENCY_Q });

  const props: MeAgencyProps = {
    authProviderProps: auth,
    seo: {
      title: "Este es el título",
      desc: "Esta es la descripción",
    },
    agency: response.data.getMyAgency,
  };
  return { props };
};
