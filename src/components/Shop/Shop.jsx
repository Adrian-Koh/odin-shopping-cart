import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Shop.module.css";
import { shopItems } from "../shop-items";
import { CardButtons } from "../CardButtons/CardButtons";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await shopItems();
      console.log(result);

      setProducts(result);

      const categorySet = new Set(result.map((product) => product.category));
      setCategories(["all products", ...categorySet]);
    };

    fetchProducts();
  }, []);

  function handleCategoryClick(category) {
    if (category === "all products") {
      setDisplayProducts(products);
    } else {
      setDisplayProducts(
        products.filter((product) => product.category === category),
      );
    }
  }

  function addCartItem(item) {
    let newCartItems;
    if (cartItems.filter((cartItem) => cartItem.id === item.id).length > 0) {
      newCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + item.quantity };
        }
        return cartItem;
      });
    } else {
      newCartItems = [...cartItems, item];
    }
    console.log(newCartItems);
    setCartItems(newCartItems);
  }

  return (
    <>
      <div className={styles.title}>
        <h1>Shop</h1>
        <nav className={styles.shopNavBar}>
          <img src="../../public/shopping.svg" alt="shop" />
          <img src="../../public/cart.svg" alt="cart" />
        </nav>
      </div>
      <div className={styles.container}>
        <aside>
          <h2>Categories</h2>
          <ul>
            {categories.map((category) => {
              return (
                <li
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </li>
              );
            })}
          </ul>
        </aside>
        <div className={styles.mainContainer}>
          <main>
            {displayProducts.map((product) => {
              return (
                <div className={styles.card} key={product.id}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className={styles.cardImage}
                  />
                  <p className={styles.cardTitle}>{product.title}</p>
                  <p className={styles.price}>${product.price}</p>
                  <CardButtons addCartItem={addCartItem} id={product.id} />
                </div>
              );
            })}
          </main>
        </div>
      </div>
    </>
  );
};

export { Shop };
