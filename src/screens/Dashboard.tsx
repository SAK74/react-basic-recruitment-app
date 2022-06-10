import { useEffect, useState } from "react";
import { navigationRoutes } from "../navigationRoutes";
import { DashboardItem, DashboardType } from "../types/dashboard.types";
import { NoResults } from "../components/NoResults/NoResults";
import { getDashboards } from "../service/dashboard.service";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import { DashboardCard } from "../components/Card/DashboardCard";

export const DashboardScreen = () => {
  const [items, setItems] = useState<DashboardType[]>([]);
  const navigate = useNavigate();

  const getLinkTo = (id: DashboardItem) => {
    switch (id) {
      case DashboardItem.DASHBOARD:
        return navigationRoutes.dashboard.path;
      case DashboardItem.SPORTS:
        return navigationRoutes.sports.path;
      case DashboardItem.COMPETITIONS:
      case DashboardItem.ORGANISATIONS:
      case DashboardItem.USERS:
      case DashboardItem.SCHEDULING:
        return navigationRoutes.dashboard.path;
    }
  };

  useEffect(() => {
    // TODO: get data from dashboard.service
    getDashboards()
      .then(data => setItems(data))
      .catch((err: Error) => {
        navigate('*', { replace: true });
        console.error(err.message);
      });
  }, []);

  if (!items || items.length === 0) {
    return <NoResults />;
  }

  return (
    <Grid container spacing={5}>
      {items.map(item => <Grid
        key={item.id}
        item
        xs={6}
        minHeight={50}
        children={<DashboardCard
          title={item.title}
          text={item.text}
          linkTo={getLinkTo(item.id)}
        />}
      />)}
    </Grid>
  )
};
