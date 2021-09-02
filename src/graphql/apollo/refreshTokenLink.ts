import { envs } from "@/config";
import fetch from "isomorphic-unfetch";
import { TokenRefreshLink } from "apollo-link-token-refresh";
import jwt from "jsonwebtoken";

/* eslint-disable-next-line */
export function refreshTokenLink(token: string): any {
  return new TokenRefreshLink({
    accessTokenField: "accessToken",
    isTokenValidOrUndefined() {
      /* eslint-disable-next-line */
      if (token && (jwt.decode(token) as any)?.exp * 1000 > Date.now()) {
        console.log("El token no ha expirado");

        return true;
      }

      console.log("Ya expiró");

      return false;
    },
    async fetchAccessToken() {
      const resonse = await fetch(`${envs.BASE_URL}/api/auth/refreshtoken`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
      });
      return resonse.json();
    },
    /* eslint-disable-next-line */
    handleFetch() {},
  });
}
