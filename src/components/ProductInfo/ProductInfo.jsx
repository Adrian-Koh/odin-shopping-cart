import styles from "./ProductInfo.module.css";

const ProductInfo = ({ product, infoClosed }) => {
  function handleInfoClose() {
    // set product to null? to close info
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
      <p className={styles.infoDescription}>{product.description}</p>
      <p className={styles.infoPrice}>${Number(product.price).toFixed(2)}</p>
      <button className={styles.infoClose} onClick={handleInfoClose}>
        X
      </button>
    </div>
  ) : null;
};

export { ProductInfo };
