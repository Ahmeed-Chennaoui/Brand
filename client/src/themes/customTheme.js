import { indigo } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const customTheme = createTheme({
  palette: {
    primary: {
      main: "#6439ff",
    },
    secondary: indigo,
    orange: {
      main: "orange",
    },
    red: {
      main: "red",
    },
  },
});
