import { createUploadLink } from "apollo-upload-client";
import fetch from "isomorphic-unfetch";
import { envs } from "@/config";

export default createUploadLink({
  uri: "http://localhost:7001/graphql",
  credentials: "same-origin", // Additional fetch() options like `credentials` or `headers`
  fetch,
});
