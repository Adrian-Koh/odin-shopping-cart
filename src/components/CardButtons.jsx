import "../styles/CardButtons.modules.css";
import { useState } from "react";

const CardButtons = () => {
  const [quantity, setQuantity] = useState(0);

  function handlePlusMinusClick(addValue) {
    setQuantity(quantity + addValue);
  }

  function handleQuantityInputChange(e) {
    setQuantity(parseInt(e.target.value));
  }

  return (
    <div className="buttons-row">
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
      <button>Add to cart</button>
    </div>
  );
};

export { CardButtons };
