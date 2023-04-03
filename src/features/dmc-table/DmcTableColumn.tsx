import { List, ListItem, ListItemText, Typography } from "@mui/material";

import React from "react";
import DmcTableCell from "./DmcTableCell";
import { DmcColour } from "../../dmc.types";

type Props = {
  allColours: DmcColour[];
  column: number;
  highlight?: string;
  clearClicked?: () => void;
  reference?: string;
};

const DmcTableColumn = ({
  allColours,
  column,
  highlight,
  reference,
  clearClicked,
}: Props) => {
  return (
    <List sx={{ margin: 1 }}>
      <Typography variant="h5" sx={{ marginBottom: 1 }}>
        {column}
      </Typography>
      {allColours
        .filter((c) => c.column === column)
        .map((colour) => (
          <DmcTableCell
            reference={reference}
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
