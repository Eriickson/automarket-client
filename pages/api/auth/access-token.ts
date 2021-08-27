import { NextIronHandler, withSession } from "@/auth";
import jwt from "jsonwebtoken";

const accessToken: NextIronHandler = async (req, res) => {
  const accessToken = req.session.get("accessToken");
  const refreshToken = req.session.get("refreshToken");

  console.log({ accessToken, refreshToken });

  try {
    const payload = jwt.verify(accessToken, "SuperSecretKeyForSigningTokens");
    res.status(200).json({ user: payload, accessToken, refreshToken });
  } catch (err) {
    console.log(err);
    res.status(401).json({ msg: "Unauthorized" });
  }
};

export default withSession(accessToken, { cookieName: "tokens", password: "zVS3LKd3Ajxu9qmFssSYamYhG8uwQKnCYnQ2" });
