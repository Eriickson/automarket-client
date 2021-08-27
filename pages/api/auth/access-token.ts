import { NextIronHandler, withSession } from "@/auth";
import jwt from "jsonwebtoken";

const accessToken: NextIronHandler = async (req, res) => {
  const accessToken = req.session.get("accessToken");

  try {
    const payload = jwt.verify(accessToken, "SuperSecretKeyForSigningTokens");
    res.status(200).json({ user: payload, accessToken, isAuth: !!payload });
  } catch (err) {
    res.json({ msg: "Unauthorized", isAuth: false });
  }
};

export default withSession(accessToken, { cookieName: "tokens", password: "zVS3LKd3Ajxu9qmFssSYamYhG8uwQKnCYnQ2" });
