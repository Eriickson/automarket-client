// My Elements
import { getApolloClient } from "@/graphql";
import { ProvidersProps, GetServerSideProps, User } from "@/shared";
import { getAuth } from "@/auth";
import { GetMyProfilePayload, GET_MY_PROFILE_Q } from "src/graphql/gql";

export interface MePageProps extends ProvidersProps, User {}

export const meServerSide: GetServerSideProps<MePageProps> = async ctx => {
  const auth = await getAuth({ ctx, privateRouter: true });
  const { client } = getApolloClient();

  const { data } = await client.query<GetMyProfilePayload>({
    query: GET_MY_PROFILE_Q,
    context: {
      headers: {
        authorization: `Bearer ${auth.accessToken}`,
      },
    },
  });

  const props: MePageProps = {
    authProviderProps: auth,
    seo: {
      desc: "",
      title: "",
    },
    ...data.getMyProfile,
  };

  return {
    props,
  };
};
