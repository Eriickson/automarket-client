export interface Contact {
  label: string;
  value: string;
  // payload: Record<string, string | string[]>;
}

export interface ContactMap {
  emails: Contact[];
  phoneNumbers: Contact[];
}

export type ContactType = "PHONE_NUMBER" | "EMAIL";
