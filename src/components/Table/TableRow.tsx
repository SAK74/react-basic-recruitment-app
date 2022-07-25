import React, { ReactElement } from "react";
import { TableColumn } from "./Table";
import { TableCell, TableRow as MuiTableRow } from "@mui/material";
import { ModelWithId } from "../../types/table.types";

type TableRowProps<Model> = {
  item: Model;
  columns: TableColumn<Model>[];
  getAddProps?: (id: ModelWithId['id']) => ({});
};

export const TableRow = <Model extends ModelWithId>({
  item,
  columns,
  getAddProps
}: TableRowProps<Model>): JSX.Element => {

  const getItemContent = (
    column: TableColumn<Model>
  ): ReactElement | string => {
    if (React.isValidElement(column.value)) {
      const addProps = getAddProps ? getAddProps(item.id) : undefined;
      return React.cloneElement(column.value, addProps);
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
