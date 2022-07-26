import { useState } from "react";
import './App.css'
import { Grid, PaletteMode, ThemeProvider, Box } from "@mui/material";
import { TopBar } from "./components/TopBar/TopBar";
import { LeftNavigation } from "./components/LeftNavigation/LeftNavigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { darkTheme, lightTheme } from "./theme";
import { Error404 } from "./screens/404";
import { navigationRoutes } from "./navigationRoutes";

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = (mode: PaletteMode) => {
    if (mode === "light") {
      setTheme(lightTheme);
    } else {
      setTheme(darkTheme);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Box sx={{ backgroundColor: "background.default" }}>
          <TopBar {...{ toggleTheme }} />
          <Grid container sx={{ pt: 1 }}>
            <Grid item sx={{ width: 200 }}>
              <LeftNavigation />
            </Grid>
            <Grid item xs sx={{ p: 2 }}>
              <Routes>
                {Object.values(navigationRoutes).map((route) => (
                  <Route key={route.path} path={route.path} element={route.element ? route.element : <Error404 />} />
                ))}
                <Route path={"*"} element={<Error404 />} />
              </Routes>
            </Grid>
          </Grid>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
