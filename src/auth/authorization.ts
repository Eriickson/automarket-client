import { envs } from "@/config";
import { AuthPayload, GetServerSidePropsContext, RolesAuth } from "@/shared";
import axios from "axios";

interface AuthorizationOptions {
  ctx: GetServerSidePropsContext;
  roles: RolesAuth[];
  redirect?: string;
}

export async function authorization({ ctx, roles, redirect = "/" }: AuthorizationOptions): Promise<AuthPayload> {
  const valid: RolesAuth[] = [];
  let permission = false;

  const { data } = await axios.get<AuthPayload>(`${envs.BASE_URL}/api/auth/access-token`, {
    headers: ctx.req.headers,
  });

  if (data.isAuth) valid.push("USER");
  if (data.agency) valid.push("AGENCY");

  // Verificamos si esta ruta es visible para cualquier rol
  if (!roles.includes("ALL"))
    valid.forEach(item => {
      if (roles.includes(item)) permission = true;
      else permission = false;
    });
  else permission = true;

  if (!permission) {
    ctx.res.writeHead(302, { Location: redirect });
    ctx.res.end();
    throw new Error("El usuario no tiene permisos necesarios");
  }

  return data;
}
