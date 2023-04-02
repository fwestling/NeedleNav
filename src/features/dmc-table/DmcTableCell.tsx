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
  onClick?: () => void;
};

const TableCell = ({
  colour,
  name,
  number,
  highlighted = false,
  onClick,
}: Props) => {
  return (
    <ListItem
      sx={(theme) => ({
        backgroundColor: colour,
        minHeight: 80,
        minWidth: 240,
        border: highlighted ? "2px solid black" : undefined,
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
