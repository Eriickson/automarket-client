import { withSession } from "@/shared";
import { NextApiResponse } from "next";

async function refreshToken(req: NextIronRequest, res: NextApiResponse) {
  res.send("Hola a todo el mundo");
}

// export default withSession(refreshToken)
