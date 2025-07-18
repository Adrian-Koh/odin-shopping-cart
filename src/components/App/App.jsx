import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <nav className={styles.navBar}>
        <Link to="home">Home</Link>
        <Link to="shop">Shop</Link>
      </nav>
      <Outlet></Outlet>
    </>
  );
}

export default App;
