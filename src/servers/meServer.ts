// My Elements
import { getApolloClient } from "@/graphql";
import { ProvidersProps, GetServerSideProps, User } from "@/shared";
import { authorization } from "@/auth";
import { GetMyProfilePayload, GET_MY_PROFILE_Q } from "src/graphql/gql";

export interface MePageProps extends ProvidersProps, User {}

export const meServerSide: GetServerSideProps<MePageProps> = async ctx => {
  const auth = await authorization({ ctx, roles: ["USER", "AGENCY"] });
  const { client } = getApolloClient({ token: auth.accessToken });

  const { data } = await client.query<GetMyProfilePayload>({
    query: GET_MY_PROFILE_Q,
  });

  const props: MePageProps = {
    authProviderProps: auth,
    seo: {
      desc: "",
      title: "",
    },
    ...data.getMyProfile.profile,
  };

  return {
    props,
  };
};
