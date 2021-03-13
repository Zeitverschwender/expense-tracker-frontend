import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux';

import styles from "./App.module.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Home from "./containers/home/Home";
import Graphs from "./containers/graphs/Graphs";
import Welcome from "./containers/welcome/Welcome";
import Categories from "./containers/categories/Categories";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#F88F01",
      contrastText: "#F5F5F5",
    },
    secondary: {
      main: "#009ff7",
      contrastText: "#F5F5F5",
    },
  },
});


const App = props => {

  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/categories" component={Categories} />
        <Route path="/graphs" component={Graphs} />
        <Route path="/expenses" component={Home} />
        <Route exact path="/" component={Home} />
        <Redirect to="/expenses" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Redirect to="/" />
      </Switch>
    );
  }


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
