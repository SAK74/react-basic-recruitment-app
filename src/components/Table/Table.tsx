import {
  Box,
  Button,
  ButtonProps,
  Paper,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow as MuiTableRow,
  Typography,
  useTheme,
} from "@mui/material";
import { CSSProperties, FC, ReactElement } from "react";
import { TableRow } from "./TableRow";
import { ModelWithId } from "../../types/table.types";
import { MsfpTheme } from "../../theme";

export type TableColumn<Model> = {
  id: string;
  label: string;
  value: keyof Model | ReactElement;
  textAlign?: CSSProperties["textAlign"];
};

type TableProps<Model extends ModelWithId> = {
  columns: TableColumn<Model>[];
  items: Model[];
  title: string;
  ButtonProps?: Pick<ButtonProps, "children" & "onClick">;
  getAddProps?: (id: ModelWithId['id']) => ({});
};

export const Table: FC<TableProps<any>> = ({
  columns,
  items,
  title,
  ButtonProps,
  getAddProps
}) => {
  const theme = useTheme<MsfpTheme>();
  return (
    <Box>
      {/*TODO: style to match designs*/}
      <Paper sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: 2,
        backgroundColor: theme.appBar.main,
        color: "secondary.contrastText"
      }}>
        <Typography>{title}</Typography>
        {ButtonProps !== undefined && (
          <Button variant={"contained"} {...ButtonProps} />
        )}
      </Paper>

      <TableContainer component={Paper}>
        <MuiTable size="small">
          <TableHead>
            <MuiTableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  sx={{ textAlign: column.textAlign || "left" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </MuiTableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow
                key={item.id}
                {...{ item, columns, getAddProps }}
              />
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
    </Box>
  );
};
