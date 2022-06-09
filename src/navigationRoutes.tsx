import { DashboardScreen } from "./screens/Dashboard";
import { SportsScreen } from "./screens/Sports";
import { DashboardItem } from "./types/dashboard.types";

type NavigationRoute = {
  path: string;
  element?: JSX.Element;
};
type NavigationRoutes = Record<DashboardItem, NavigationRoute>;

export const navigationRoutes: NavigationRoutes = {
  dashboard: {
    path: "/",
    element: <DashboardScreen />,
  },
  sports: {
    path: "/sports",
    element: <SportsScreen />,
  },
  competitions: {
    path: "/competitions",
  },
  scheduling: {
    path: "/scheduling",
  },
  organisations: {
    path: "/organizations",
  },
  users: {
    path: "/users",
  },
};
