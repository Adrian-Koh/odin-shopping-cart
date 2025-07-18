import styles from "./Cart.module.css";
import { CardButtons } from "../CardButtons/CardButtons";

const Cart = ({ products, cartItems, updateCartItem }) => {
  return (
    <div>
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
                <div className={styles.cartItemInfo}>
                  <p className={styles.cartItemTitle}>{product.title}</p>
                  <p className={styles.cartItemQuantity}>
                    Quantity: {cartItem.quantity}
                  </p>
                  <p className={styles.cartItemPrice}>
                    ${Number(product.price * cartItem.quantity).toFixed(2)}
                  </p>
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
      <div className={styles.checkoutBar}>
        <p>
          Price: $
          {Number(
            cartItems.reduce((total, cartItem) => {
              const itemPrice = products.filter(
                (product) => product.id === cartItem.id,
              )[0].price;
              return total + itemPrice * cartItem.quantity;
            }, 0),
          ).toFixed(2)}
        </p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export { Cart };
