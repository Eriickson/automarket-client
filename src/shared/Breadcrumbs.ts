type BreadcrumbsItem = {
  href: string;
  label: string;
  isCurrencyPage: boolean;
};

export interface Breadcrumbs {
  show?: boolean;
  back?: boolean;
  home?: boolean;
  items?: BreadcrumbsItem[];
}
