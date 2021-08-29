import { NextApiResponse } from "next";
import { getApolloClient } from "@/graphql";
import { NextIronHandler, NextIronRequest, withSession } from "@/auth";
import { LOGOUT_USER_M } from "src/graphql/gql/mutations";

const signout: NextIronHandler = async (req: NextIronRequest, res: NextApiResponse) => {
  const { client } = getApolloClient();
  const accessToken = await req.session.get("accessToken");
  const refreshUserToken = await req.session.get("refreshToken");

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "refresh-user-token": refreshUserToken,
  };

  if (accessToken && refreshUserToken) {
    try {
      const { data } = await client.mutate({
        mutation: LOGOUT_USER_M,
        context: {
          headers,
        },
      });

      if (data.logoutUser.response) {
        req.session.destroy();
        res.json({ logout: true });
      }
    } catch (err: any) {
      console.log(err.message);
      res.json({ logout: false });
    }
  } else {
    req.session.destroy();
    res.json({ logout: true });
  }
};

export default withSession(signout, { cookieName: "tokens", password: "zVS3LKd3Ajxu9qmFssSYamYhG8uwQKnCYnQ2" });
