import React, { ReactElement, useContext } from "react";
import { TableColumn } from "./Table";
import { IconButton, TableCell, TableRow as MuiTableRow } from "@mui/material";
import { ModelWithId } from "../../types/table.types";
import { SportContext } from "../../screens/Sports";
import { SportType } from "../../types/sports.types";

type TableRowProps<Model> = {
  item: Model;
  columns: TableColumn<Model>[];
};

export const TableRow = <Model extends ModelWithId>({
  item,
  columns,
}: TableRowProps<Model>): JSX.Element => {
  const context = useContext(SportContext);
  const getItemContent = (
    column: TableColumn<Model>
  ): ReactElement | string => {
    if (React.isValidElement(column.value)) {
      if (!context) {
        throw new Error("Sport Context is lacked...!")
      }
      const matched = item.id as (SportType['id']) === context.idSportDetails;
      return <IconButton
        children={column.value}
        onClick={() => context.getSportDetails(Number(item.id))}
        sx={{
          ['& .MuiSvgIcon-root']: { color: matched ? "primary.main" : "default" }
        }}
      />
    }

    return item[column.value] as unknown as string;
  };

  return (
    <MuiTableRow>
      {columns.map((column) => (
        <TableCell key={column.id} sx={{ textAlign: column.textAlign || "left" }}>
          {getItemContent(column)}
        </TableCell>
      ))}
    </MuiTableRow>
  );
};
