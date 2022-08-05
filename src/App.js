import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { useState } from "react";
import { themeOptions } from "./components/themeOptions";

function App() {
  const [mode, setMode] = useState("light")

  const theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: '#40455c',
        light: '#40455c',
        dark: '#40455c'
      },
      secondary: {
        main: '#40455c',
        dark: '#40455c'
      }
    }
  })

  const darkTheme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: '#ede'
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar setMode={setMode} mode={mode} />
        <Feed />
        <Rightbar />
      </Stack>
      <Add />
    </Box>
    </ThemeProvider>
    
  );
}

export default App;
