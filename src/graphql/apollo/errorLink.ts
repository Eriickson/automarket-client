import { onError } from "@apollo/client/link/error";

export default onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      /* eslint-disable-next-line no-console */
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
    );
  /* eslint-disable-next-line no-console */
  if (networkError) console.error(`[Network error]: ${JSON.stringify(networkError)}`);
});
