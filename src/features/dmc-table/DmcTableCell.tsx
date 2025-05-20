import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { Avatar, ListItemButton, ListItemSecondaryAction } from "@mui/material";
import { Star } from "@mui/icons-material";
import OwnedIcon from "@mui/icons-material/Check";
import NotOwnedIcon from "@mui/icons-material/StarOutline";

type Props = {
  colour: string;
  name: string;
  number: string;
  owned?: boolean;
  highlighted?: boolean;
  reference?: string;
  onClick?: () => void;
  numbersOnly?: boolean;
};

const TableCell = ({
  colour,
  name,
  number,
  owned = false,
  highlighted = false,
  onClick,
  reference,
  numbersOnly,
}: Props) => {
  return (
    <ListItem
      sx={(theme) => ({
        backgroundColor: colour,
        minHeight: numbersOnly ? 40 : 80,
        minWidth: numbersOnly ? 120 : 240,
        // borderStyle: highlighted || reference ? "solid" : undefined,
        // borderColor: !!reference
        //   ? reference
        //   : highlighted
        //   ? "white"
        //   : undefined,
        // borderWidth: highlighted ? "4px 8px" : !!reference ? "2px 4px" : 0,
        margin: highlighted && reference ? 2 : 0,
      })}
    >
      <ListItemAvatar>
        <Avatar
          sx={(theme) => ({
            backgroundColor: reference ?? colour,
            color: theme.palette.getContrastText(reference ?? colour),
            fontSize: 14,
          })}
        >
          {number}
        </Avatar>
      </ListItemAvatar>
      {numbersOnly ? null : onClick ? (
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
      {!owned ? null : (
        // <ListItemSecondaryAction>
        //   <NotOwnedIcon />
        // </ListItemSecondaryAction>
        <ListItemSecondaryAction>
          <OwnedIcon
            sx={(theme) => ({ color: theme.palette.getContrastText(colour) })}
          />
        </ListItemSecondaryAction>
      )}
    </ListItem>
  );
};

export default TableCell;
