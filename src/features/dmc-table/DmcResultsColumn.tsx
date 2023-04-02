import { List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import DmcTableCell from "./DmcTableCell";
import { DmcColour } from "../../dmc.types";

type Props = { colours: DmcColour[] };

const DmcResultsColumn = ({ colours }: Props) => {
  return (
    <List sx={{ margin: 1 }}>
      {colours.map((colour) => (
        <DmcTableCell
          number={colour.dmc}
          colour={colour.hexCode}
          name={`${colour.flossName}: ${colour.red} ${colour.blue} ${colour.green}`}
        />
      ))}
    </List>
  );
};

export default DmcResultsColumn;
