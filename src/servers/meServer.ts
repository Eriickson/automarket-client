import { GetServerSideProps } from "next";
import { useApolloClient } from "@/graphql";
import { gql } from "@/graphql";

// Packages
import { IUser } from "@/shared";

export interface MePageProps {
  profileMe: IUser;
}

export const meServerSide: GetServerSideProps = async ctx => {
  const { client } = useApolloClient();

  try {
    const { data } = await client.query<gql.IGetProfileMePayload>({
      query: gql.GET_PROFILE_ME_Q,
    });

    const props: MePageProps = {
      profileMe: data.getProfileMe.profileMe,
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
