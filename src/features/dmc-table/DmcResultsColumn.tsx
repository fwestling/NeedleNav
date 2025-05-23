import { List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import DmcTableCell from "./DmcTableCell";
import { DmcColour } from "../../dmc.types";

type Props = {
  colours: DmcColour[];
  reference?: string;
  setClicked: (col: DmcColour) => void;
  numbersOnly?: boolean;
};

const DmcResultsColumn = ({ colours, setClicked, reference, numbersOnly }: Props) => {
  return (
    <List sx={{ margin: 1 }}>
      {colours.map((colour) => (
        <DmcTableCell
          reference={reference}
          number={colour.dmc}
          owned={colour.owned}
          colour={colour.hexCode}
          name={`${colour.flossName} (${colour.red}, ${colour.green}, ${colour.blue})`}
          onClick={() => setClicked(colour)}
          numbersOnly={numbersOnly}
        />
      ))}
    </List>
  );
};

export default DmcResultsColumn;
