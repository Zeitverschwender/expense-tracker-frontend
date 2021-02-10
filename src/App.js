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
        <a
          href="https://github.com/Zeitverschwender/expense-tracker-frontend"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.github}
        >
          <img src={github} alt="Github Logo" />
        </a>
      </footer>
    </div>
  );
}

export default App;
