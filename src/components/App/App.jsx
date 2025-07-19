import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <nav className={styles.navBar}>
        <Link to="home" className={styles.navBarLink}>
          Home
        </Link>
        <Link to="shop" className={styles.navBarLink}>
          Shop
        </Link>
      </nav>
      <Outlet></Outlet>
      <footer>
        Photo by{" "}
        <a href="https://unsplash.com/@sphotos_00?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Sven
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/photos/photo-of-house-at-meadow-V7WkmXntA8M?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Unsplash
        </a>
      </footer>
    </>
  );
}

export default App;
