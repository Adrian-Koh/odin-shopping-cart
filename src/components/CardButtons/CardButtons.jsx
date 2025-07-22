import styles from "./CardButtons.module.css";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

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

  useEffect(() => {
    setQuantity(totalQuantity);
  }, [totalQuantity]);

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

CardButtons.propTypes = {
  updateCartItem: PropTypes.func,
  id: PropTypes.number,
  totalQuantity: PropTypes.number,
  isInCart: PropTypes.bool,
};

export { CardButtons };
