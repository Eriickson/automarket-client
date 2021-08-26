import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { Session, withIronSession } from "next-iron-session";

export type NextIronRequest = NextApiRequest & { session: Session };

interface User {
  id: string;
  name: string;
  lastname: string;
  username: string;
  email: string;
}

async function handler(req: NextIronRequest, res: NextApiResponse) {
  const user: User = {
    id: "1",
    name: "Erickson Manuel",
    lastname: "Holguín",
    username: "Erickson01d",
    email: "erickson01d@gmail.com",
  };
  const { accessToken, refreshToken } = generateTokens(user);

  req.session.set("accessToken", accessToken);
  req.session.set("refreshToken", refreshToken);

  await req.session.save();
  res.send("Logged in");
}
export default withIronSession(handler, {
  password: "complex_password_at_least_32_characters_long",
  cookieName: "session",
  // if your localhost is served on http:// then disable the secure flag
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
});

function generateTokens(user: User) {
  const accessToken = jwt.sign(user, "ACCESS-TOKEN-KEY", { expiresIn: 60 * 15 });
  const refreshToken = jwt.sign({ id: user.id, email: user.email }, "REFRESH-TOKEN-KEY", {
    expiresIn: 60 * 60 * 24 * 30,
  });

  return { accessToken, refreshToken };
}
