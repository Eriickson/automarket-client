import { Option } from "@/shared";

export const useYear = (minYear = 1960): { years: Option[]; yearsBetween: Option[] } => {
  let years: Option[] = [];
  let yearsBetween: Option[] = [];

  years = [];
  yearsBetween = [];

  for (let i = new Date().getFullYear() + 1; i >= 1960; i--) {
    years.push({ label: i.toString(), id: i });
  }

  if (minYear)
    for (let i = new Date().getFullYear() + 1; i >= minYear; i--) {
      yearsBetween.push({ label: i.toString(), id: i });
    }

  return { years, yearsBetween };
};
