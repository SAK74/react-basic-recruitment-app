import { Divider, Drawer, List, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import { navigationRoutes } from "../../navigationRoutes";
import { Home, SportsSoccer, EmojiEvents } from '@mui/icons-material';
import { NavigationItem } from "./NavigationItem";
/*
  icons can be found in here: https://mui.com/material-ui/material-icons/
 */

// const Ofset = styled('div')(({ theme }) => theme.mixins.toolbar);

export const LeftNavigation = () => {
  const getPath = (item: string) => navigationRoutes[item]['path'];
  return <>

    <Drawer variant="permanent" anchor="left">
      {/* <Ofset /> */}
      <Toolbar />
      <List>
        <p>Management</p>
        {/* <Link to={navigationRoutes.dashboard.path}>Dashboard</Link> */}
        <NavigationItem to={getPath("dashboard")} label="Dashboard" icon={<Home />} />
        <NavigationItem to={getPath("sports")} label="Sports" icon={<SportsSoccer />} />
        {/* <NavigationItem to={getPath("competitions")} label="Competitions" icon={<EmojiEvents />} /> */}
        {/* <Link to={navigationRoutes.sports.path}>Sports</Link> */}
        <Link to={""}>Competitions</Link>
        <Divider />
        <p>Planning</p>
        <Link to={""}>Scheduling</Link>
        <Link to={""}>Organisations</Link>
        <Divider />
        <p>People</p>
        <Link to={""}>Scheduling</Link>
        <Link to={""}>Organisations</Link>
      </List>
    </Drawer>
  </>


};
