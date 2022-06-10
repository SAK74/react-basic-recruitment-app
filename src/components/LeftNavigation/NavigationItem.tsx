import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";
import { Link, useMatch } from "react-router-dom";
import { FC, ReactElement } from "react";

type NavigationItemProp = {
  to: string;
  icon: ReactElement<SvgIconComponent>;
  label: string;
};

export const NavigationItem: FC<NavigationItemProp> = ({ to, icon, label }) => {
  const matched = Boolean(useMatch(to));
  // console.log(icon);
  return (
    <Link to={to} >
      <ListItemButton selected={matched} sx={{
        ['& .MuiSvgIcon-root']: {
          color: matched ? "primary.main" : "default"
        },
        ['& .MuiTypography-root']: {
          fontWeight: matched ? 500 : 400,
          color: "text.primary"
        }
      }}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText>{label}</ListItemText>
      </ListItemButton>
    </Link>
  );
};
