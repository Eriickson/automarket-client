import { ApolloLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const authLink = (): ApolloLink => setContext((_, { headers }) => ({ ...headers }));

export default authLink;
