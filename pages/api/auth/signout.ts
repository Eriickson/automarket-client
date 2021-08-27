import { NextApiResponse } from "next";
import { getApolloClient } from "@/graphql";
import { SigninPayload, SigninVariables, SIGNIN_M } from "src/graphql/gql/mutations";
import { NextIronHandler, NextIronRequest, withSession } from "@/auth";

const signout: NextIronHandler = async (req: NextIronRequest, res: NextApiResponse) => {
  res.json({ logout: true });
};

export default withSession(signout, { cookieName: "tokens", password: "zVS3LKd3Ajxu9qmFssSYamYhG8uwQKnCYnQ2" });
