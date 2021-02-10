import Home from "./containers/home/Home";

import github from "./assets/images/iconmonstr-github-1.svg";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <span className={"material-icons " + styles.sidemenuButton}>menu</span>
        <h1>EXPENSE TRACKER</h1>
      </header>
      <Home />
      <footer className={styles.appFooter}>
        <img className={styles.github} src={github} alt="Github Logo" />
      </footer>
    </div>
  );
}

export default App;
