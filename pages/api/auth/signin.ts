import { NextApiResponse } from "next";
import { getApolloClient } from "@/graphql";
import { SigninPayload, SigninVariables, SIGNIN_M } from "src/graphql/gql/mutations";
import { NextIronHandler, NextIronRequest, withSession } from "@/auth";

const signin: NextIronHandler = async (req: NextIronRequest, res: NextApiResponse) => {
  const { client } = getApolloClient();
  const { identifier, password } = req.body;
  const credencials = { identifier: identifier, password: password };

  try {
    const { data } = await client.mutate<SigninPayload, SigninVariables>({
      mutation: SIGNIN_M,
      variables: {
        credencials,
      },
    });

    if (!data?.signin) return;

    const { accessToken, refreshToken } = data.signin;

    req.session.set("accessToken", accessToken);
    req.session.set("refreshToken", refreshToken);

    await req.session.save();

    res.json({ successful: true });
  } catch (err) {
    res.json({ successful: false });
  }
};
export default withSession(signin, { cookieName: "tokens", password: "zVS3LKd3Ajxu9qmFssSYamYhG8uwQKnCYnQ2" });
