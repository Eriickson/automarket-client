import { GetServerSideProps } from "next";
import { getApolloClient } from "@/graphql";
import { gql } from "@/graphql";

// Packages
import { ProvidersProps, IUser } from "@/shared";
import { getAuthSsr } from "@/auth";

export interface MePageProps extends ProvidersProps {
  profileMe: IUser;
}

export const meServerSide: GetServerSideProps = async ctx => {
  const { client } = getApolloClient();
  try {
    const auth = await getAuthSsr({ ctx, privateRouter: "/" });

    const { data } = await client.query<gql.IGetProfileMePayload>({
      query: gql.GET_PROFILE_ME_Q,
      context: {
        headers: { token: auth.session?.token },
      },
    });

    const props: MePageProps = {
      profileMe: data.getProfileMe.profileMe,
      authProviderProps: { ...auth },
    };

    return {
      props,
    };
  } catch (err) {
    console.log(err);
  }

  return {
    props: {},
  };
};
