import { Divider, Drawer, List, Toolbar } from "@mui/material";
// import { Link } from "react-router-dom";
import { navigationRoutes } from "../../navigationRoutes";
import { Home, SportsSoccer, EmojiEvents, EventNote, CorporateFare, PeopleAlt } from '@mui/icons-material';
import { NavigationItem } from "./NavigationItem";
import { DashboardItem } from "../../types/dashboard.types";
/*
  icons can be found in here: https://mui.com/material-ui/material-icons/
 */

export const LeftNavigation = () => {
  const getPath = (item: DashboardItem) => navigationRoutes[item]['path'];

  return <>
    <Drawer variant="permanent" anchor="left" sx={{ [`& .MuiDrawer-paper`]: { width: 200 } }}>
      <Toolbar />
      <List>
        <p>Management</p>
        {/* <Link to={navigationRoutes.dashboard.path}>Dashboard</Link> */}
        <NavigationItem to={getPath(DashboardItem['DASHBOARD'])} label="Dashboard" icon={<Home />} />
        <NavigationItem to={getPath(DashboardItem['SPORTS'])} label="Sports" icon={<SportsSoccer />} />
        <NavigationItem to={getPath(DashboardItem['COMPETITIONS'])} label="Competitions" icon={<EmojiEvents />} />
        {/* <NavigationItem to={getPath("competitions")} label="Competitions" icon={<EmojiEvents />} /> */}
        {/* <Link to={navigationRoutes.sports.path}>Sports</Link> */}
        {/* <Link to={""}>Competitions</Link> */}
        <Divider />
        <p>Planning</p>
        {/* <Link to={""}>Scheduling</Link> */}
        {/* <Link to={""}>Organisations</Link> */}
        <NavigationItem to={getPath(DashboardItem["SCHEDULING"])} label="Scheduling" icon={<EventNote />} />
        <NavigationItem to={getPath(DashboardItem["ORGANISATIONS"])} label="Organizations" icon={<CorporateFare />} />
        <Divider />
        <p>People</p>
        <NavigationItem to={getPath(DashboardItem["USERS"])} label="Users" icon={<PeopleAlt />} />
      </List>
    </Drawer>
  </>


};
