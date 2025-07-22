import styles from "./Cart.module.css";
import { CardButtons } from "../CardButtons/CardButtons";
import PropTypes from "prop-types";

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
              <div className={styles.cartItem} key={product.id}>
                <img src={product.image} alt={product.title} />
                <div className={styles.cartItemInfo}>
                  <p className={styles.cartItemTitle}>{product.title}</p>
                  <p className={styles.cartItemQuantity}>
                    Quantity: {cartItem.quantity}
                  </p>
                  <p className={styles.cartItemPrice}>
                    Unit price: ${Number(product.price).toFixed(2)}
                  </p>
                  <p className={styles.cartItemTotalPrice}>
                    Total price: $
                    {Number(product.price * cartItem.quantity).toFixed(2)}
                  </p>
                </div>
                <div className={styles.buttons}>
                  <CardButtons
                    updateCartItem={updateCartItem}
                    id={product.id}
                    totalQuantity={cartItem.quantity}
                    isInCart={true}
                  ></CardButtons>
                  <img
                    src="/trash-can.svg"
                    alt="delete"
                    className={styles.delete}
                    onClick={() => updateCartItem({ ...cartItem, quantity: 0 })}
                  />
                </div>
              </div>
            );
          })}
      </div>
      {cartItems.length === 0 ? (
        <p className={styles.nothingMessage}>
          Your cart is empty. Add some items!
        </p>
      ) : (
        <div className={styles.checkoutBar}>
          <p className={styles.totalPrice}>
            Total: $
            {Number(
              cartItems.reduce((total, cartItem) => {
                const itemPrice = products.filter(
                  (product) => product.id === cartItem.id,
                )[0].price;
                return total + itemPrice * cartItem.quantity;
              }, 0),
            ).toFixed(2)}
          </p>
          <button className={styles.checkout}>Checkout</button>
        </div>
      )}
    </div>
  );
};

Cart.propTypes = {
  products: PropTypes.array,
  cartItems: PropTypes.array,
  updateCartItem: PropTypes.func,
};

export { Cart };
