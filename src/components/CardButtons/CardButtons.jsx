import styles from "./CardButtons.module.css";
import { useState } from "react";

const CardButtons = ({ addCartItem, id }) => {
  const [quantity, setQuantity] = useState(0);

  function handlePlusMinusClick(addValue) {
    setQuantity(quantity + addValue);
  }

  function handleQuantityInputChange(e) {
    setQuantity(parseInt(e.target.value));
  }

  function handleAddToCart() {
    setQuantity(0);
    addCartItem({ id, quantity });
  }

  return (
    <div className={styles.buttonsRow}>
      <button
        disabled={quantity === 0}
        onClick={() => handlePlusMinusClick(-1)}
      >
        -
      </button>
      <input
        type="number"
        onChange={handleQuantityInputChange}
        value={quantity}
      ></input>
      <button onClick={() => handlePlusMinusClick(1)}>+</button>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
};

export { CardButtons };
