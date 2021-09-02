import { NextIronHandler, withSession } from "@/auth";
import { envs } from "@/config";
import fetch from "isomorphic-unfetch";

const refreshToken: NextIronHandler = async (req, res) => {
  const accessToken = req.session.get("accessToken");
  const refreshUserToken = req.session.get("refreshToken");

  const data = await fetch(envs.SERVER_GRAPHQL, {
    method: "POST",
    body: JSON.stringify({
      query: `
        mutation RefreshUserToken {
          refreshUserToken {
            accessToken
            refreshToken
          }
        }
      `,
    }),
    headers: {
      "content-type": "application/json",
      "refresh-user-token": refreshUserToken,
      authorization: `Bearer ${accessToken}`,
    },
  }).then(response => response.json());

  if (data.errors) {
    console.log(data.errors);

    return res.status(401).json({ unauthorized: true });
  }

  req.session.set("accessToken", data.data.refreshUserToken.accessToken);
  req.session.set("refreshToken", data.data.refreshUserToken.refreshToken);

  await req.session.save();
  res.json({ successful: true });
};

export default withSession(refreshToken, { cookieName: "tokens", password: "zVS3LKd3Ajxu9qmFssSYamYhG8uwQKnCYnQ2" });
