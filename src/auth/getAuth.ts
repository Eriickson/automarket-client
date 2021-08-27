import axios from "axios";
import { GetServerSidePropsContext } from "@/shared";

export async function getAuth({ req }: GetServerSidePropsContext): Promise<void> {
  try {
    const { data } = await axios.get("http://localhost:9000/api/auth/access-token", {
      headers: req.headers,
    });
  } catch (err: any) {
    console.log(err.message);
  }
}
