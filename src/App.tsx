import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { PlanetProvider } from "./PlanetContext";
import { PlanetSearch } from "./PlanetSearch";
import { PlanetList } from "./PlanetList";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import PlanetBanner from "./PlanetBanner";
const theme = createTheme({
  palette: {
    primary: {
      main: "#f9d71c",
    },
    secondary: {
      main: "#0",
    },
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PlanetProvider>
        <CssBaseline />
        <Container
          maxWidth="sm"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            py: 4,
          }}
        >
          <PlanetSearch />
          <PlanetBanner />
        </Container>
        <Container
          maxWidth="sm"
          sx={{ display: "flex", justifyContent: "center", py: 2 }}
        >
          <PlanetList />
        </Container>
      </PlanetProvider>
    </ThemeProvider>
  );
}
export default App;
