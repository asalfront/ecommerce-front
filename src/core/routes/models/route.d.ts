export type RouteType = {
  state: string,
  index?: boolean,
  path?: string,
  children?: RouteType[],
  sidebarProps?: {
    label: string,
    icon?: React.ReactNode,
  };
};
