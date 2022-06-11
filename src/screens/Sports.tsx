import { useEffect, useState, createContext } from "react";
import { SportsType, SportType } from "../types/sports.types";
import { NoResults } from "../components/NoResults/NoResults";
import { TableColumn } from "../components/Table/Table";
import { Visibility } from "@mui/icons-material";
import { getSportById, getSports } from "../service/sports.service";
import { Table } from '../components/Table/Table';
import { Grid, Typography, Box, useTheme } from "@mui/material";
import { SportDetailCard } from "../components/Card/SportCard";
import { InputCard } from "../components/Card/InputCard";
import { MsfpTheme } from "../theme";

interface SportContextType {
  getSportDetails: (id: SportType['id']) => void;
  idSportDetails?: SportType['id'];
}
export const SportContext = createContext<SportContextType | undefined>(undefined);

export const SportsScreen = () => {
  const [sports, setSports] = useState<SportsType | undefined>(undefined);
  const [sportDetails, setSportDetails] = useState<SportType | undefined>(undefined);
  const [addSport, setAddSport] = useState<boolean>(false);

  const columns: TableColumn<SportType>[] = [
    { id: "sport", label: "Sport", value: "name" },
    { id: "location", label: "Location", value: "location" },
    { id: "name", label: "Name", value: "shortDescription" },
    {
      id: "actions",
      label: "Actions",
      value: <Visibility />,
      textAlign: "right",
    },
  ];

  const getSportDetails = (id: SportType['id']) => {
    // TODO: get sport details
    getSportById(id)
      .then(data => setSportDetails(data));
  }

  useEffect(() => {
    // TODO: get data from sports.service
    getSports()
      .then(data => setSports(data));
  }, []);

  const { palette: { background } } = useTheme<MsfpTheme>();

  if (!sports) {
    return <NoResults />;
  }

  // TODO: display data got form service
  return <>
    <Box sx={{
      color: theme => theme.palette.getContrastText(background.default)
    }}>
      <Typography paragraph sx={{ fontWeight: 500 }}>Sports</Typography>
      <Typography paragraph>
        {sports.teaser}
      </Typography>
    </Box>
    <Grid container spacing={3}>
      <Grid item xs>
        <SportContext.Provider value={{ getSportDetails, idSportDetails: sportDetails?.id }}>
          <Table
            title="Sports"
            columns={columns}
            items={sports.items}
            ButtonProps={{
              children: "add sport",
              onClick: () => setAddSport(true)
            }}
          />
        </SportContext.Provider>
      </Grid>
      {addSport ? <Grid item xs={4}><InputCard {...{ setAddSport }} /></Grid>
        : sportDetails !== undefined &&
        <Grid item xs={6}>
          <SportDetailCard {...sportDetails} />
        </Grid>}
    </Grid>
  </>
};
