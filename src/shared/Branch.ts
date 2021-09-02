import { Ubication } from "./Ubication";

export interface Branch {
  agencyId: string;
  id: string;
  isSede: boolean;
  name: string;
  ubication: Ubication;
  uuid: string;
}
