import { TokenRefreshLink } from "apollo-link-token-refresh";

export const refreshLink = new TokenRefreshLink({
  accessTokenField: "newToken",
  isTokenValidOrUndefined() {
    return true;
  },
  async fetchAccessToken() {
    const resonse = await fetch("/");
    return resonse.json();
  },
  handleFetch(newToken) {
    console.log(newToken);
  },
  handleResponse: (operation, accessTokenField) => (response: any) => {
    console.log(response);
  },
  handleError: error => {
    console.error("Cannot refresh access token:", error);
  },
});
