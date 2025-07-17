import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Shop.modules.css";
import { shopItems } from "./shop-items";
import { CardButtons } from "./CardButtons";

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

    setCartItems(newCartItems);
  }

  return (
    <>
      <h1>Shop</h1>
      <div className="container">
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
        <main>
          {displayProducts.map((product) => {
            return (
              <div className="card" key={product.id}>
                <img src={product.image} alt={product.title} />
                <p className="card-title">{product.title}</p>
                <p className="price">${product.price}</p>
                <CardButtons addCartItem={addCartItem} id={product.id} />
              </div>
            );
          })}
        </main>
      </div>
    </>
  );
};

export { Shop };
