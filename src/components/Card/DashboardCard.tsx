import { FC } from "react";
import { Paper, Stack, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

type DashboardCardProps = {
  title: string;
  text: string;
  linkTo: string;
};

// TODO: style to match designs
export const DashboardCard: FC<DashboardCardProps> = ({
  title,
  text,
  linkTo,
}) => {
  const theme = useTheme();

  return (
    <Paper elevation={4} sx={{ height: 1 / 1, display: "flex", flexDirection: "column", position: "relative" }}>
      {/* <Stack sx={{ height: 1 / 1 }}> */}
      <div>
        <p>{title}</p>
      </div>
      <div style={{ padding: theme.spacing(1, 2) }}>
        <p>{text}</p>
        {/* <Typography noWrap>{text}</Typography> */}
      </div>
      <Stack
        style={{ padding: theme.spacing(1, 2), position: "absolute", bottom: "5px", right: "5px" }}
        direction={"row"}
        justifyContent={"flex-end"}
        color={theme.palette.primary.main}
      >
        <Link to={linkTo}>More</Link>
      </Stack>
      {/* </Stack> */}
    </Paper>
  );
};
