import { ApolloLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const authLink = (): ApolloLink =>
  setContext(async (_, { headers }) => {
    return { ...headers };
  });
export default authLink;
