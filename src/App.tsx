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
import ownedColours from "./features/dmc-table/ownedColours.json";

const ownedDmcColours = dmcColours
  .filter(({ dmc }) => ownedColours.includes(dmc))
  .map((c) => ({ ...c, owned: true })) as DmcColour[];

const allDmcColours = dmcColours.map((c) => ({
  ...c,
  owned: ownedColours.includes(c.dmc),
})) as DmcColour[];

function App() {
  const [colours, setColours] = useState<DmcColour[]>([]);
  const [reference, setReference] = useState<string | undefined>();
  const [clicked, setClicked] = useState<DmcColour | undefined>();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [showResults, setShowResults] = useState<boolean>(false);
  const [showOwnedOnly, setShowOwnedOnly] = useState<boolean>(false);

  const listOfColours = useMemo(
    () => (showOwnedOnly ? ownedDmcColours : allDmcColours),
    [showOwnedOnly]
  );

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
        <FormControlLabel
          control={
            <Checkbox
              checked={showOwnedOnly}
              onChange={(e, c) => setShowOwnedOnly(c)}
            />
          }
          label="Show only owned threads?"
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
              allColours={listOfColours}
              column={clicked.column}
              highlight={clicked.dmc}
              clearClicked={() => setClicked(undefined)}
            />
          ) : colours.length && showResults ? (
            <DmcResultsColumn
              reference={reference}
              colours={colours}
              setClicked={setClicked}
            />
          ) : (
            <Fragment>
              <DmcTableColumn
                reference={reference}
                allColours={listOfColours}
                column={1}
              />
              <DmcTableColumn
                reference={reference}
                allColours={listOfColours}
                column={2}
              />
              <DmcTableColumn
                reference={reference}
                allColours={listOfColours}
                column={3}
              />
              <DmcTableColumn
                reference={reference}
                allColours={listOfColours}
                column={4}
              />
              <DmcTableColumn
                reference={reference}
                allColours={listOfColours}
                column={5}
              />
              <DmcTableColumn
                reference={reference}
                allColours={listOfColours}
                column={6}
              />
              <DmcTableColumn
                reference={reference}
                allColours={listOfColours}
                column={7}
              />
              <DmcTableColumn
                reference={reference}
                allColours={listOfColours}
                column={8}
              />
              <DmcTableColumn
                reference={reference}
                allColours={listOfColours}
                column={9}
              />
              <DmcTableColumn
                reference={reference}
                allColours={listOfColours}
                column={10}
              />
              <DmcTableColumn
                reference={reference}
                allColours={listOfColours}
                column={11}
              />
              <DmcTableColumn
                reference={reference}
                allColours={listOfColours}
                column={12}
              />
              <DmcTableColumn
                reference={reference}
                allColours={listOfColours}
                column={13}
              />
              <DmcTableColumn
                reference={reference}
                allColours={listOfColours}
                column={14}
              />
              <DmcTableColumn
                reference={reference}
                allColours={listOfColours}
                column={15}
              />
              <DmcTableColumn
                reference={reference}
                allColours={listOfColours}
                column={16}
              />
              <DmcTableColumn
                reference={reference}
                allColours={listOfColours}
                column={17}
              />
              <DmcTableColumn
                reference={reference}
                allColours={listOfColours}
                column={18}
              />
              <DmcTableColumn
                reference={reference}
                allColours={listOfColours}
                column={19}
              />
              <DmcTableColumn
                reference={reference}
                allColours={listOfColours}
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
