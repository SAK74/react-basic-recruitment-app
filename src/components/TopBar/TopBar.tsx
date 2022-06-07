/*
  icon for 'user avatar' can be found here: https://mui.com/material-ui/material-icons/
 */

import { AppBar, SvgIcon, Toolbar } from "@mui/material";
import { ReactComponent as Logo } from '../../logo.svg';
import { useTheme } from '@mui/material/styles';
import { MsfpTheme } from '../../theme';


export const TopBar = () => {
  const { appBar } = useTheme<MsfpTheme>();
  return <AppBar sx={{ background: appBar.main }} >
    <Toolbar>
      <SvgIcon component={Logo} inheritViewBox sx={{ fontSize: "3rem", width: "3em" }} />
      Asp
    </Toolbar>
  </AppBar>
}