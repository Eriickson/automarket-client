import axios from "axios";
import { GetServerSidePropsContext } from "@/shared";

export async function getAuth({ req }: GetServerSidePropsContext): Promise<void> {
  const { data } = await axios.get("http://localhost:9000/api/user", {
    headers: req.headers,
  });

  console.log(data);
}
