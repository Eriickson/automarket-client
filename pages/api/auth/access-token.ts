import { NextIronHandler, withSession } from "@/auth";
import { AuthPayload } from "@/shared";
import jwt from "jsonwebtoken";

const accessToken: NextIronHandler = async (req, res) => {
  const accessToken = req.session.get("accessToken");
  const refreshToken = req.session.get("refreshToken");
  const maxAge = req.session.get("maxAge");

  if (!maxAge || Date.parse(String(maxAge)) < parseInt(String(Date.now() / 1000))) {
    return res.json({ msg: "Unauthorized", isAuth: false });
  }

  try {
    const payload = jwt.verify(accessToken, "SuperSecretKeyForSigningTokens") as AuthPayload;
    res.status(200).json({ ...payload, accessToken, isAuth: !!payload, refreshToken, maxAge });
  } catch (err) {
    res.json({ accessToken, isAuth: true, refreshToken, maxAge });
  }
};

export default withSession(accessToken, { cookieName: "tokens", password: "zVS3LKd3Ajxu9qmFssSYamYhG8uwQKnCYnQ2" });
