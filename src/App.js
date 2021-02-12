import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Home from "./containers/home/Home";

import styles from "./App.module.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Graphs from "./containers/graphs/Graphs";
import Categories from "./containers/categories/Categories";

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


const App = props => {
  let routes = (
    <Switch>
      <Route path="/categories" component={Categories} />
      <Route path="/graphs" render={Graphs} />
      <Route path="/expenses" component={Home} />
      <Route exact path="/" component={Home} />
      <Redirect to="/expenses" />
    </Switch>
  );

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.app}>
        <Header></Header>
        {routes}
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
