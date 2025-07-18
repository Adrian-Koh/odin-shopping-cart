import styles from "./Cart.module.css";
import { CardButtons } from "../CardButtons/CardButtons";

const Cart = ({ products, cartItems, updateCartItem }) => {
  return (
    <div className={styles.cart}>
      {cartItems
        .sort((a, b) => a.id - b.id)
        .map((cartItem) => {
          const product = products.filter(
            (product) => product.id === cartItem.id,
          )[0];
          return (
            <div className={styles.cartItem}>
              <img src={product.image} alt={product.title} />
              <div>
                <p>{product.title}</p>
                <p>Quantity: {cartItem.quantity}</p>
              </div>
              <CardButtons
                updateCartItem={updateCartItem}
                id={product.id}
                totalQuantity={cartItem.quantity}
                isInCart={true}
              ></CardButtons>
            </div>
          );
        })}
    </div>
  );
};

export { Cart };
