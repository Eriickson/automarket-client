import { getApolloClient } from "@/graphql";
import { gql } from "@/graphql";

// Packages
import { ProvidersProps, IUser, GetServerSideProps } from "@/shared";
import { getAuth, getAuthSsr } from "@/auth";
import { GetMyProfilePayload, GET_MY_PROFILE_Q } from "src/graphql/gql";

/* eslint-disable @typescript-eslint/no-empty-interface */
export interface MePageProps extends ProvidersProps {
  // myProfile: IUser;
}

export const meServerSide: GetServerSideProps<MePageProps> = async ctx => {
  const auth = await getAuth({ ctx });
  const { client } = getApolloClient();

  const { data } = await client.query<GetMyProfilePayload>({
    query: GET_MY_PROFILE_Q,
    context: {
      headers: {
        authorization: `Bearer ${auth.accessToken}`,
      },
    },
  });

  console.log(data.getMyProfile.birthday);

  const props: MePageProps = {
    authProviderProps: auth,
    seo: {
      desc: "",
      title: "",
    },
  };

  return {
    props,
  };
};
