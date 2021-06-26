import { WebSocketLink } from "@apollo/client/link/ws";
import * as ws from "ws";

const wsLink = new WebSocketLink({
  uri: process.env.WS_GRAPHQL_SERVER,
  options: {
    reconnect: true,
    timeout: 60000,
  },
  webSocketImpl: ws,
});

export default wsLink;
