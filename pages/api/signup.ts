// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

import { envs } from "@/config";

type Response = {
  token: string;
};

export default function signupApi(req: NextApiRequest, res: NextApiResponse<Response>): void {
  console.log(req.body);

  try {
    const token = jwt.sign({ email: req.body.email }, envs.SECRECT_KEY_SIGNUP_TOKEN, { expiresIn: 60 * 60 * 12 });

    res.status(200).json({ token });
  } catch (err) {
    console.log(err);
  }
}
