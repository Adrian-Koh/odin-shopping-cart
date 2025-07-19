import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <div className={styles.largeContainer}>
      <div className={styles.container}>
        <h1 className={styles.errorTitle}>Oh no, this route doesn't exist!</h1>
        <p className={styles.linkMsg}>
          <Link to="/">
            You can go back to the home page by clicking here, though!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
