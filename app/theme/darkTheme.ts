"use client";
import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ff0000",
    },
    secondary: {
      main: "#7000ff",
    },
  },
});

export default darkTheme;
