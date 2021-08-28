import { ApolloLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import axios from "axios";

const authLink = (): ApolloLink =>
  setContext(async (_, { headers }) => {
    const { data } = await axios.get("http://localhost:9000/api/auth/access-token");

    return {
      headers: {
        ...headers,
        // authorization: `Bearer ${data.accessToken}`,
      },
    };
  });
export default authLink;
