import { NextApiRequest, NextApiResponse } from "next";
import { getApolloClient } from "@/graphql";
import { SigninPayload, SigninVariables, SIGNIN_M } from "src/graphql/gql/mutations";

async function signin(req: NextApiRequest, res: NextApiResponse) {
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

    console.log(data?.signin);
  } catch (err: any) {
    console.log(err.message);
  }

  res.send("Recibido");
}
export default signin;
