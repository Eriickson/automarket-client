import { ApolloLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const authLink = (token: string): ApolloLink =>
  setContext(async (_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`,
      },
    };
  });
export default authLink;
