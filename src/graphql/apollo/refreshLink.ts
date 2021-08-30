import { envs } from "@/config";
import { TokenRefreshLink } from "apollo-link-token-refresh";
import fetch from "isomorphic-unfetch";

export const refreshLink: any = new TokenRefreshLink({
  accessTokenField: "newToken",
  isTokenValidOrUndefined() {
    console.log("isTokenValidOrUndefined");

    return false;
  },
  async fetchAccessToken() {
    console.log("fetchAccessToken");
    const resonse = await fetch(`${envs.BASE_URL}/api/auth/refreshtoken`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    });
    return resonse.json();
  },
  handleFetch(newToken) {
    console.log("handleFetch");
    console.log(newToken);
  },
  handleResponse: (operation, accessTokenField) => (response: any) => {
    console.log("handleResponse");
    console.log(response);
  },
  handleError: error => {
    console.error("Cannot refresh access token:", error);
  },
});
