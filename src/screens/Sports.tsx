import { useEffect, useState } from "react";
import { SportsType, SportType } from "../types/sports.types";
import { NoResults } from "../components/NoResults/NoResults";
import { TableColumn } from "../components/Table/Table";
import { Visibility } from "@mui/icons-material";
import { getSportById, getSports } from "../service/sports.service";
import { Table } from '../components/Table/Table';
import { Box, Typography } from "@mui/material";

export const SportsScreen = () => {
  const [sports, setSports] = useState<SportsType | undefined>(undefined);
  const [sportDetails, setSportDetails] = useState<SportType | undefined>(undefined);

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

  if (!sports) {
    return <NoResults />;
  }

  // TODO: display data got form service
  return <Box sx={{
    backgroundColor: "background.default",
    pt: 2
  }}>
    <Typography paragraph>Sports</Typography>
    <Typography>
      {sports.teaser}
    </Typography>
    <Table
      title="Sports"
      columns={columns}
      items={sports.items}
      ButtonProps={{
        children: "add sport",
        onclick: () => { }
      }}
    />
    {sportDetails !== undefined && "Details"}
  </Box>
};
