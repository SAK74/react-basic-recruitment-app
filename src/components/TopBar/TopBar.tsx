/*
  icon for 'user avatar' can be found here: https://mui.com/material-ui/material-icons/
 */

import { AppBar, Avatar, Box, FormControlLabel, SvgIcon, Switch, Toolbar } from "@mui/material";
import { ReactComponent as Logo } from '../../logo.svg';
import { useTheme } from '@mui/material/styles';
import { MsfpTheme } from '../../theme';
import { Brightness5 } from "@mui/icons-material";


export const TopBar = () => {
  const theme = useTheme<MsfpTheme>();
  return <AppBar sx={{ background: theme.appBar.main, zIndex: theme.zIndex.drawer + 1 }} >
    <Toolbar>
      <SvgIcon component={Logo} inheritViewBox sx={{ fontSize: "3rem", width: "3em" }} />
      <Box sx={{ flexGrow: 1 }} />
      <FormControlLabel
        control={<Switch />}
        label={<Brightness5 />}
      />
      <Avatar />
    </Toolbar>
  </AppBar>
}