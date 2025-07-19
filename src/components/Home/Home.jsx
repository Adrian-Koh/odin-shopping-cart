import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.largeContainer}>
      <div className={styles.container}>
        <h1>The Everything Shop</h1>
        <p className={styles.welcome}>
          Welcome to The Everything Shop! Here, you will find anything you can
          think of. From clothes to electronics, we've got you covered. Browse
          through our catalog and you'll find that you'll never need to visit
          another store again. We provide free shipping to all countries for a
          minimum order of $100. Happy browsing!
        </p>
        <hr />
        <div className={styles.introContainer}>
          <img
            src="../../../public/old-man-portrait.jpg"
            alt="Kier Eagan"
            className={styles.introImage}
          />
          <p className={styles.imgCredits}>
            Photo by{" "}
            <a href="https://unsplash.com/@birminghammuseumstrust?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Birmingham Museums Trust
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/man-in-black-suit-painting-G70apFxSF_g?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Unsplash
            </a>
          </p>
          <p className={styles.intro}>
            The Everything Shop was founded in Kingston, NY in 1865 by Kier
            Eagan. Driven by the desire to provide a one-stop-shop for the
            community's everyday needs, Kier worked with local suppliers to put
            as many essentials as he could on the shelves. As his vision grew to
            provide access to essential goods to everywhere in the world, The
            Everything Shop has expanded to other locations which includes
            Chicago, IL, Houston, TX and San Francisco, CA, among other
            locations. With the internet, we are proud to say that you can
            purchase our products from anywhere in the world. Thank you for
            stopping by!
          </p>
        </div>
      </div>
    </div>
  );
};

export { Home };
