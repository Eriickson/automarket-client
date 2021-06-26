import { createUploadLink } from "apollo-upload-client";
import fetch from "isomorphic-unfetch";
import { envs } from "@/config";

export default createUploadLink({
  uri: envs.SERVER_GRAPHQL,
  credentials: "same-origin", // Additional fetch() options like `credentials` or `headers`
  fetch,
});
