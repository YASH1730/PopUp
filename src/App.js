import MainScreen from "./components/pages/Editor/MainScreen";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";

const light = createTheme({
  palette: {
    primary: {
      main: "#268feb",
    },
    secondary: {
      main: "#fbfbfb",
    },
  },
  typography: {
    fontFamily: "Work+Sans",
    fontWeightLight: 100,
    fontWeightRegular: 300,
    fontWeightMedium: 300,
    fontWeightBold: 400,
  },
});
function App() {



  return (
   <>
    <ThemeProvider theme={light}>
          <CssBaseline enableColorScheme>
           <MainScreen />
          </CssBaseline>
   </ThemeProvider>
   </>
  );
}

export default App;
