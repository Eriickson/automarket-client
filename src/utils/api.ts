import axios from "axios";

import { envs } from "@/config";

export const api = axios.create({
  baseURL: `${envs.BASE_URL}/api`,
});
