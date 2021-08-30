import { ApolloLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { envs } from "@/config";
import axios from "axios";

const authLink = (): ApolloLink =>
  setContext(async (_, { headers }) => {
    const { data } = await axios.get(`${envs.BASE_URL}/api/auth/access-token`);

    return {
      headers: {
        ...headers,
        // authorization: `Bearer ${data.accessToken}`,
      },
    };
  });
export default authLink;
