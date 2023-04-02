import { List, ListItem, ListItemText, Typography } from "@mui/material";
import colours from "./dmcColours.json";

import React from "react";
import DmcTableCell from "./DmcTableCell";

type Props = { column: number; highlight?: string; clearClicked?: () => void };

const DmcTableColumn = ({ column, highlight, clearClicked }: Props) => {
  const myColours = colours.filter((c) => c.column === column);

  return (
    <List sx={{ margin: 1 }}>
      <Typography variant="h5" sx={{ marginBottom: 1 }}>
        {column}
      </Typography>
      {myColours.map((colour) => (
        <DmcTableCell
          onClick={!highlight ? undefined : clearClicked}
          highlighted={colour.dmc === highlight}
          number={colour.dmc}
          colour={colour.hexCode}
          name={colour.flossName}
        />
      ))}
    </List>
  );
};

export default DmcTableColumn;
