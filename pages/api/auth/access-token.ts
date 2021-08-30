import { NextIronHandler, withSession } from "@/auth";
import { AuthPayload } from "@/shared";
import jwt from "jsonwebtoken";

const accessToken: NextIronHandler = async (req, res) => {
  const accessToken = req.session.get("accessToken");

  try {
    const payload = jwt.verify(accessToken, "SuperSecretKeyForSigningTokens") as AuthPayload;
    res.status(200).json({ ...payload, accessToken, isAuth: !!payload });
  } catch (err) {
    res.json({ msg: "Unauthorized", isAuth: false });
  }
};

export default withSession(accessToken, { cookieName: "tokens", password: "zVS3LKd3Ajxu9qmFssSYamYhG8uwQKnCYnQ2" });
