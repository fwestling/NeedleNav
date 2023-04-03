import { Fragment, useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DmcTableColumn from "./features/dmc-table/DmcTableColumn";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import ColourFilter from "./features/colourSearch/ColourFilter";
import { DmcColour } from "./dmc.types";
import DmcResultsColumn from "./features/dmc-table/DmcResultsColumn";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import dmcColours from "./features/dmc-table/dmcColours.json";

function App() {
  const [colours, setColours] = useState<DmcColour[]>([]);
  const [reference, setReference] = useState<string | undefined>();
  const [clicked, setClicked] = useState<DmcColour | undefined>();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [showResults, setShowResults] = useState<boolean>(false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Stack sx={{ width: "100%", height: "100%" }}>
        <ColourFilter
          onChange={(payload) => {
            if (payload === null) {
              setColours([]);
              setReference(undefined);
            } else {
              const { reference, dmc } = payload;
              setColours(dmc);
              setReference(reference);
            }
          }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={showResults}
              onChange={(e, c) => setShowResults(c)}
            />
          }
          label="Show results?"
          disabled={colours.length === 0}
        />
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "100%",
            overflow: "auto",
            position: "relative",
          }}
        >
          {reference ? (
            <Box
              sx={{
                height: "100%",
                position: "relative",
                width: "2rem",
                backgroundColor: reference,
              }}
            />
          ) : null}
          {!!clicked ? (
            <DmcTableColumn
              reference={reference}
              allColours={dmcColours}
              column={clicked.column}
              highlight={clicked.dmc}
              clearClicked={() => setClicked(undefined)}
            />
          ) : colours.length && showResults ? (
            <DmcResultsColumn colours={colours} setClicked={setClicked} />
          ) : (
            <Fragment>
              <DmcTableColumn
                reference={reference}
                allColours={dmcColours}
                column={1}
              />
              <DmcTableColumn
                reference={reference}
                allColours={dmcColours}
                column={2}
              />
              <DmcTableColumn
                reference={reference}
                allColours={dmcColours}
                column={3}
              />
              <DmcTableColumn
                reference={reference}
                allColours={dmcColours}
                column={4}
              />
              <DmcTableColumn
                reference={reference}
                allColours={dmcColours}
                column={5}
              />
              <DmcTableColumn
                reference={reference}
                allColours={dmcColours}
                column={6}
              />
              <DmcTableColumn
                reference={reference}
                allColours={dmcColours}
                column={7}
              />
              <DmcTableColumn
                reference={reference}
                allColours={dmcColours}
                column={8}
              />
              <DmcTableColumn
                reference={reference}
                allColours={dmcColours}
                column={9}
              />
              <DmcTableColumn
                reference={reference}
                allColours={dmcColours}
                column={10}
              />
              <DmcTableColumn
                reference={reference}
                allColours={dmcColours}
                column={11}
              />
              <DmcTableColumn
                reference={reference}
                allColours={dmcColours}
                column={12}
              />
              <DmcTableColumn
                reference={reference}
                allColours={dmcColours}
                column={13}
              />
              <DmcTableColumn
                reference={reference}
                allColours={dmcColours}
                column={14}
              />
              <DmcTableColumn
                reference={reference}
                allColours={dmcColours}
                column={15}
              />
              <DmcTableColumn
                reference={reference}
                allColours={dmcColours}
                column={16}
              />
              <DmcTableColumn
                reference={reference}
                allColours={dmcColours}
                column={17}
              />
              <DmcTableColumn
                reference={reference}
                allColours={dmcColours}
                column={18}
              />
              <DmcTableColumn
                reference={reference}
                allColours={dmcColours}
                column={19}
              />
              <DmcTableColumn
                reference={reference}
                allColours={dmcColours}
                column={20}
              />
            </Fragment>
          )}
        </Box>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
