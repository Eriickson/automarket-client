import { NextApiRequest, NextApiResponse } from "next";

async function sendEmailRegister(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);

  return res.send("Hola a todo el mundo");
}

export default sendEmailRegister;
