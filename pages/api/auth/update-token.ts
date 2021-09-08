import { NextIronHandler, withSession } from "@/auth";

const updateToken: NextIronHandler = async (req, res) => {
  const { accessToken, refreshToken } = req.body;

  req.session.set("accessToken", accessToken);
  req.session.set("refreshToken", refreshToken);

  await req.session.save();

  res.json({ successful: true });
};

export default withSession(updateToken, { cookieName: "tokens", password: "zVS3LKd3Ajxu9qmFssSYamYhG8uwQKnCYnQ2" });
