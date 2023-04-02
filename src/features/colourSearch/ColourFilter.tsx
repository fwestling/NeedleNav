import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import { DmcColour } from "../../dmc.types";
import findNearestColours from "./findNearestColours";
import { styled } from "@mui/material";

type Props = {
  onChange: (colours: DmcColour[]) => void;
};

const ColourFilter = ({ onChange }: Props) => {
  const [redFilter, setRedFilter] = useState<number | undefined>();
  const [blueFilter, setBlueFilter] = useState<number | undefined>();
  const [greenFilter, setGreenFilter] = useState<number | undefined>();

  useEffect(() => {
    if (
      redFilter !== undefined &&
      blueFilter !== undefined &&
      greenFilter !== undefined
    )
      onChange(
        findNearestColours(
          { R: redFilter, G: greenFilter, B: blueFilter },
          10
        ) as DmcColour[]
      );
  }, [redFilter, blueFilter, greenFilter]);

  return (
    <Box sx={{ display: "flex" }}>
      <RedTextField
        sx={{ margin: 1 }}
        label={"Red"}
        value={redFilter}
        onChange={(e) =>
          setRedFilter(
            e.target.value
              ? Math.max(255, Math.min(0, Number.parseInt(e.target.value)))
              : undefined
          )
        }
        type="number"
        inputProps={{ min: 0, max: 255, step: 1 }}
      />
      <GreenTextField
        sx={{ margin: 1 }}
        label={"Green"}
        value={greenFilter}
        onChange={(e) =>
          setGreenFilter(
            e.target.value
              ? Math.max(255, Math.min(0, Number.parseInt(e.target.value)))
              : undefined
          )
        }
        type="number"
        inputProps={{ min: 0, max: 255, step: 1 }}
      />
      <BlueTextField
        sx={{ margin: 1 }}
        label={"Blue"}
        value={blueFilter}
        onChange={(e) =>
          setBlueFilter(
            e.target.value
              ? Math.max(255, Math.min(0, Number.parseInt(e.target.value)))
              : undefined
          )
        }
        type="number"
        inputProps={{ min: 0, max: 255, step: 1 }}
      />
    </Box>
  );
};

const RedTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "red",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "red",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "red",
    },
    "&:hover fieldset": {
      borderColor: "red",
    },
    "&.Mui-focused fieldset": {
      borderColor: "red",
    },
  },
});

const BlueTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "blue",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "blue",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "blue",
    },
    "&:hover fieldset": {
      borderColor: "blue",
    },
    "&.Mui-focused fieldset": {
      borderColor: "blue",
    },
  },
});

const GreenTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "green",
    },
    "&:hover fieldset": {
      borderColor: "green",
    },
    "&.Mui-focused fieldset": {
      borderColor: "green",
    },
  },
});

export default ColourFilter;
