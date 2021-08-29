import { NextIronHandler, withSession } from "@/auth";
import { envs } from "@/config";
import jwt from "jsonwebtoken";
import fetch from "isomorphic-unfetch";

const refreshToken: NextIronHandler = async (req, res) => {
  const accessToken = req.session.get("accessToken");
  const refreshUserToken = req.session.get("refreshToken");

  const payload = jwt.decode(accessToken) as { exp: number; id: number };

  if (accessToken && payload.exp * 1000 > Date.now() / 1000) {
    const data = await fetch(envs.SERVER_GRAPHQL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "refresh-user-token": refreshUserToken,
      },
      body: JSON.stringify({
        query: `
          mutation {
            refreshUserToken(input: {userId: "${payload.id}"}) {
              accessToken
              refreshToken
            }
          }
        `,
      }),
    }).then(response => response.json());

    if (data.errors) {
      return res.status(401).json({ unauthorized: true });
    }

    req.session.set("accessToken", data.refreshUserToken.accessToken);
    req.session.set("refreshToken", data.refreshUserToken.refreshToken);

    await req.session.save();
  }

  res.send("Hola a todo el mundo");
};

export default withSession(refreshToken, { cookieName: "tokens", password: "zVS3LKd3Ajxu9qmFssSYamYhG8uwQKnCYnQ2" });
