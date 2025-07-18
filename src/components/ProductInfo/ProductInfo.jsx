import styles from "./ProductInfo.module.css";

const ProductInfo = ({ product, infoClosed }) => {
  function handleInfoClose() {
    infoClosed();
  }
  return product ? (
    <div className={styles.infoCard}>
      <img
        className={styles.infoImage}
        src={product.image}
        alt={product.title}
      />
      <p className={styles.infoTitle}>{product.title}</p>
      <p className={styles.infoPrice}>${Number(product.price).toFixed(2)}</p>
      <p className={styles.infoDescription}>{product.description}</p>
      <button className={styles.infoClose} onClick={handleInfoClose}>
        &#x2715;
      </button>
    </div>
  ) : null;
};

export { ProductInfo };
