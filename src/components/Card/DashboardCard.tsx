import { FC } from "react";
import {
  useTheme, Button,
  Card, CardHeader, CardContent, CardActions
} from "@mui/material";
import { Link } from "react-router-dom";
import { MsfpTheme } from '../../theme';

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
  const theme = useTheme<MsfpTheme>();

  return (
    <Card elevation={4}>
      <CardHeader
        title={title}
        sx={{ backgroundColor: theme.appBar.main, color: "secondary.contrastText", py: 1 }}
        titleTypographyProps={{
          variant: "h5"
        }}
      />
      <CardContent>
        {text}
      </CardContent>
      <CardActions sx={{
        justifyContent: "flex-end",
        ['& a']: { textDecoration: "none" }
      }}>
        <Link to={linkTo}>
          <Button>more info</Button>
        </Link>
      </CardActions>
    </Card>
  );
};
