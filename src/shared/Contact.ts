export interface Contact {
  title: string;
  value: string;
  payload: Record<string, string | string[]>;
}
export type ContactType = "PHONE_NUMBER" | "EMAIL";
