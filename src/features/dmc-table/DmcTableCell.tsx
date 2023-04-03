import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { ListItemButton } from "@mui/material";

type Props = {
  colour: string;
  name: string;
  number: string;
  highlighted?: boolean;
  reference?: string;
  onClick?: () => void;
};

const TableCell = ({
  colour,
  name,
  number,
  highlighted = false,
  onClick,
  reference,
}: Props) => {
  return (
    <ListItem
      sx={(theme) => ({
        backgroundColor: colour,
        minHeight: 80,
        minWidth: 240,
        borderStyle: highlighted || reference ? "solid" : undefined,
        borderColor: !!reference
          ? reference
          : highlighted
          ? "white"
          : undefined,
        borderWidth: highlighted ? "4px 8px" : !!reference ? "2px 4px" : 0,
        margin: highlighted && reference ? 2 : 0,
      })}
    >
      <ListItemAvatar
        sx={(theme) => ({ color: theme.palette.getContrastText(colour) })}
      >
        {number}
      </ListItemAvatar>
      {onClick ? (
        <ListItemButton onClick={onClick}>
          <ListItemText
            sx={(theme) => ({ color: theme.palette.getContrastText(colour) })}
          >
            {name}
          </ListItemText>
        </ListItemButton>
      ) : (
        <ListItemText
          sx={(theme) => ({ color: theme.palette.getContrastText(colour) })}
        >
          {name}
        </ListItemText>
      )}
    </ListItem>
  );
};

export default TableCell;
