import { IOption } from "@/shared";

export const useYear = (minYear?: number): { years: IOption[]; yearsBetween: IOption[] } => {
  let years: IOption[] = [];
  let yearsBetween: IOption[] = [];

  years = [];
  yearsBetween = [];

  for (let i = new Date().getFullYear() + 1; i >= 1960; i--) {
    years.push({ label: i.toString(), value: i });
  }

  if (minYear)
    for (let i = new Date().getFullYear() + 1; i >= minYear; i--) {
      yearsBetween.push({ label: i.toString(), value: i });
    }

  return { years, yearsBetween };
};
