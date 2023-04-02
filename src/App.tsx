import { useMemo, useState } from "react";
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

function App() {
  const [colours, setColours] = useState<DmcColour[]>([]);
  const [clicked, setClicked] = useState<DmcColour | undefined>();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

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
        <ColourFilter onChange={setColours} />

        {!!clicked ? (
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height: "100%",
              overflow: "auto",
            }}
          >
            <DmcTableColumn
              column={clicked.column}
              highlight={clicked.dmc}
              clearClicked={() => setClicked(undefined)}
            />
          </Box>
        ) : colours.length ? (
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height: "100%",
              overflow: "auto",
            }}
          >
            <DmcResultsColumn colours={colours} setClicked={setClicked} />
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height: "100%",
              overflow: "auto",
            }}
          >
            <DmcTableColumn column={1} />
            <DmcTableColumn column={2} />
            <DmcTableColumn column={3} />
            <DmcTableColumn column={4} />
            <DmcTableColumn column={5} />
            <DmcTableColumn column={6} />
            <DmcTableColumn column={7} />
            <DmcTableColumn column={8} />
            <DmcTableColumn column={9} />
            <DmcTableColumn column={10} />
            <DmcTableColumn column={11} />
            <DmcTableColumn column={12} />
            <DmcTableColumn column={13} />
            <DmcTableColumn column={14} />
            <DmcTableColumn column={15} />
            <DmcTableColumn column={16} />
            <DmcTableColumn column={17} />
            <DmcTableColumn column={18} />
            <DmcTableColumn column={19} />
            <DmcTableColumn column={20} />
          </Box>
        )}
      </Stack>
    </ThemeProvider>
  );
}

export default App;
