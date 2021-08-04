import { GetServerSideProps } from "next";
import { getApolloClient } from "@/graphql";
import { gql } from "@/graphql";

// Packages
import { IUser } from "@/shared";
import { getAuthSsr } from "@/auth";

export interface MePageProps {
  profileMe: IUser;
  isAuth: boolean;
}

export const meServerSide: GetServerSideProps = async ctx => {
  const { client } = getApolloClient();
  const { session, isAuth } = await getAuthSsr({ ctx, privateRouter: "/" });

  try {
    const { data } = await client.query<gql.IGetProfileMePayload>({
      query: gql.GET_PROFILE_ME_Q,
      context: {
        headers: { token: session?.user.token },
      },
    });

    const props: MePageProps = {
      profileMe: data.getProfileMe.profileMe,
      isAuth,
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
