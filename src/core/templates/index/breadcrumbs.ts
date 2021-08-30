import { Breadcrumbs } from "@/shared";

export function getBreadcrumbs(): Breadcrumbs {
  return {
    show: false,
    back: false,
    home: false,
    items: [
      {
        label: "/",
        isCurrencyPage: true,
        href: "/",
      },
    ],
  };
}
