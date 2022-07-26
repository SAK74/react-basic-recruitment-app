import { Divider, Drawer, List, Toolbar, ListSubheader } from "@mui/material";
import { navigationRoutes } from "../../navigationRoutes";
import { Home, SportsSoccer, EmojiEvents, EventNote, CorporateFare, PeopleAlt } from '@mui/icons-material';
import { NavigationItem } from "./NavigationItem";
import { DashboardItem } from "../../types/dashboard.types";
/*
  icons can be found in here: https://mui.com/material-ui/material-icons/
 */

export const LeftNavigation = () => {
  const getPath = (item: DashboardItem) => navigationRoutes[item].path;

  return <>
    <Drawer variant="permanent" anchor="left" sx={{ [`& .MuiDrawer-paper`]: { width: 200 } }}>
      <Toolbar />
      <List sx={{ pt: 3, '& a': { textDecoration: "none" } }}>
        <ListSubheader>Management</ListSubheader>
        {/* <ListItem><ListItemText>Management</ListItemText></ListItem> */}
        {/* <Link to={navigationRoutes.dashboard.path}>Dashboard</Link> */}
        <NavigationItem to={getPath(DashboardItem['DASHBOARD'])} label="Dashboard" icon={<Home />} />
        <NavigationItem to={getPath(DashboardItem['SPORTS'])} label="Sports" icon={<SportsSoccer />} />
        <NavigationItem to={getPath(DashboardItem['COMPETITIONS'])} label="Competitions" icon={<EmojiEvents />} />
        <Divider />
        <ListSubheader>Planning</ListSubheader>
        {/* <ListItem><ListItemText>Planning</ListItemText></ListItem> */}
        <NavigationItem to={getPath(DashboardItem["SCHEDULING"])} label="Scheduling" icon={<EventNote />} />
        <NavigationItem to={getPath(DashboardItem["ORGANISATIONS"])} label="Organizations" icon={<CorporateFare />} />
        <Divider />
        <ListSubheader>People</ListSubheader>
        {/* <ListItem><ListItemText>People</ListItemText></ListItem> */}
        <NavigationItem to={getPath(DashboardItem["USERS"])} label="Users" icon={<PeopleAlt />} />
      </List>
    </Drawer>
  </>
};
