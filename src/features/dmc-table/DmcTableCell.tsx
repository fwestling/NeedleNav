import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

type Props = {
  colour: string;
  name: string;
  number: string;
};

const TableCell = ({ colour, name, number }: Props) => {
  return (
    <ListItem
      sx={(theme) => ({
        backgroundColor: colour,
        minHeight: 80,
        minWidth: 240,
      })}
    >
      <ListItemAvatar
        sx={(theme) => ({ color: theme.palette.getContrastText(colour) })}
      >
        {number}
      </ListItemAvatar>
      <ListItemText
        sx={(theme) => ({ color: theme.palette.getContrastText(colour) })}
      >
        {name}
      </ListItemText>
    </ListItem>
  );
};

export default TableCell;
