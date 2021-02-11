import { createMuiTheme, ThemeProvider } from "@material-ui/core";

import Home from "./containers/home/Home";

import styles from "./App.module.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#F88F01",
    },
    secondary: {
      main: "#009ff7",
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.app}>
        <Header></Header>
        <Home />
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
