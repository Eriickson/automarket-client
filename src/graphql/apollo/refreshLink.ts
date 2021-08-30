import { envs } from "@/config";
import fetch from "isomorphic-unfetch";
import { TokenRefreshLink } from "apollo-link-token-refresh";
// import jwt from "jsonwebtoken";

export function refreshLink(token: string): any {
  return new TokenRefreshLink({
    accessTokenField: "accessToken",
    isTokenValidOrUndefined() {
      console.log("isTokenValidOrUndefined");
      // /* if (token && (jwt.decode(token) as any)?.exp * 1000 > Date.now()) {
      //   console.log("El token no se ha vencido, por tanto no se tiene que actualizar");
      //   return true;
      // } */

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
  });
}
