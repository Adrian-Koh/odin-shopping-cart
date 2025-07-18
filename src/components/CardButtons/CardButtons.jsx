import styles from "./CardButtons.module.css";
import { useState } from "react";

const CardButtons = ({
  updateCartItem,
  id,
  totalQuantity = 0,
  isInCart = false,
}) => {
  const [quantity, setQuantity] = useState(totalQuantity);

  function handlePlusMinusClick(addValue) {
    setQuantity(quantity + addValue);
  }

  function handleQuantityInputChange(e) {
    setQuantity(parseInt(e.target.value));
  }

  function handleAddToCart() {
    if (isInCart) {
      setQuantity(quantity);
    } else {
      setQuantity(0);
    }

    updateCartItem({ id, quantity });
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
      <button onClick={handleAddToCart}>
        {isInCart ? "Update" : "Add to cart"}
      </button>
    </div>
  );
};

export { CardButtons };
