"use client";
import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#77b9f7",
    },
    secondary: {
      main: "#FAF9F6",
    },
  },
  typography: {
    fontFamily: "var(--font-roboto-condensed)",
  },
});

export default lightTheme;
