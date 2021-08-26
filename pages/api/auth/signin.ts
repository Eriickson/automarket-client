import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { Session, withIronSession } from "next-iron-session";
import { v4 as uuid } from "uuid";
import moment from "moment";

export type NextIronRequest = NextApiRequest & { session: Session };

interface User {
  id: string;
  name: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
}

const user: User = {
  id: "1",
  name: "Erickson Manuel",
  lastname: "Holguín",
  username: "Erickson01d",
  email: "erickson01d@gmail.com",
  password: "123456789e",
};

function signin(identifier: string, password: string) {
  if (!(identifier === user.email || identifier === user.username)) throw new Error("Credenciales incorrectas");
  if (password !== user.password) throw new Error("Credenciales incorrectas");

  const tokens = generateTokens(user);

  console.log(tokens);
}

async function handler(req: NextIronRequest, res: NextApiResponse) {
  const { identifier, password } = req.body;
  try {
    signin(identifier, password);
  } catch (err: any) {
    return res.status(401).json({ error: err.message });
  }
  // const { accessToken, refreshToken } = generateTokens(user);

  // req.session.set("accessToken", accessToken);
  // req.session.set("refreshToken", refreshToken);

  // await req.session.save();
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
  const refreshToken = uuid();

  return { accessToken, refreshToken };
}
