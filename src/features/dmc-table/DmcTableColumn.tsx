import { List, ListItem, ListItemText, Typography } from "@mui/material";
import colours from "./dmcColours.json";

import React from "react";
import DmcTableCell from "./DmcTableCell";

type Props = { column: number };

const DmcTableColumn = ({ column }: Props) => {
  const myColours = colours.filter((c) => c.column === column);

  return (
    <List sx={{ margin: 1 }}>
      <Typography variant="h5" sx={{ marginBottom: 1 }}>
        {column}
      </Typography>
      {myColours.map((colour) => (
        <DmcTableCell
          number={colour.dmc}
          colour={colour.hexCode}
          name={colour.flossName}
        />
      ))}
    </List>
  );
};

export default DmcTableColumn;
