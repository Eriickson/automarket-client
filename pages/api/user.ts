import { NextApiResponse } from "next";
import { withIronSession } from "next-iron-session";
import { NextIronRequest } from "./login";

function handler(req: NextIronRequest, res: NextApiResponse) {
  const user = req.session.get("authentication");

  res.send({ user });
}

export default withIronSession(handler, {
  password: "complex_password_at_least_32_characters_long",
  cookieName: "session",
  // if your localhost is served on http:// then disable the secure flag
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
});
