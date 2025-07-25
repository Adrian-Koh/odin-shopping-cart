import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Shop.module.css";
import { shopItems } from "../shop-items";
import { CardButtons } from "../CardButtons/CardButtons";
import { Cart } from "../Cart/Cart";
import { ProductInfo } from "../ProductInfo/ProductInfo";

const ALL_CATEGORY = "all products";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORY);
  const [categories, setCategories] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showShop, setShowShop] = useState(true);
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await shopItems();

      setProducts(result);

      const categorySet = new Set(result.map((product) => product.category));
      setCategories([ALL_CATEGORY, ...categorySet]);
    };

    fetchProducts();
  }, []);

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
    setCartItems(newCartItems);
  }

  function updateItemFromCart(item) {
    let newCartItems;
    if (cartItems.filter((cartItem) => cartItem.id === item.id).length > 0) {
      newCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
      if (item.quantity === 0) {
        setCartItems(newCartItems);
        return;
      }
    }
    newCartItems = [...newCartItems, item];
    setCartItems(newCartItems);
  }

  function handleNavClick(show) {
    setShowShop(show);
  }

  function handleCategoryClick(category) {
    setActiveCategory(category);
    setShowShop(true);
  }

  function showInfoCard(product) {
    setProductInfo(product);
  }

  return (
    <>
      <div className={styles.title}>
        <h1>The Everything Shop</h1>
        <nav className={styles.shopNavBar}>
          <img
            src="/shopping.svg"
            alt="shop"
            onClick={() => handleNavClick(true)}
            className={!showShop ? styles.showIcon : styles.hideIcon}
          />
          <img
            src="/cart.svg"
            alt="cart"
            onClick={() => handleNavClick(false)}
            className={showShop ? styles.showIcon : styles.hideIcon}
          />
        </nav>
      </div>
      {products.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
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
            {showShop ? (
              <main>
                {products
                  .filter((product) =>
                    activeCategory === ALL_CATEGORY
                      ? product
                      : product.category === activeCategory
                        ? product
                        : null,
                  )
                  .map((product) => {
                    return (
                      <div className={styles.card} key={product.id}>
                        <img
                          src={product.image}
                          alt={product.title}
                          className={styles.cardImage}
                        />
                        <p className={styles.cardTitle}>{product.title}</p>
                        <p className={styles.price}>
                          ${Number(product.price).toFixed(2)}
                        </p>
                        <img
                          src="/information.svg"
                          alt="info"
                          className={styles.infoIcon}
                          onClick={() => showInfoCard(product)}
                        />
                        <CardButtons
                          updateCartItem={addCartItem}
                          id={product.id}
                          isInCart={false}
                        />
                      </div>
                    );
                  })}
              </main>
            ) : (
              <Cart
                products={products}
                cartItems={cartItems}
                updateCartItem={updateItemFromCart}
              />
            )}
            <ProductInfo
              product={productInfo}
              infoClosed={() => setProductInfo(null)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export { Shop };
