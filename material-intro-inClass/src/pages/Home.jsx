import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { teal } from "@mui/material/colors";
import TextFieldComp from "../components/TextFieldComp";
import TypoButtons from "../components/TypoButtons";

const Home = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#21a415",
        light: "#51f346",
        dark: "#46630c",
      },
      secondary: {
        main: teal[500],
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <TypoButtons />
      <TextFieldComp />
    </ThemeProvider>
  );
};

export default Home;
