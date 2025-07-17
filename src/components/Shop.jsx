import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Shop.modules.css";
import { shopItems } from "./shop-items";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await shopItems();

      setProducts(result);

      const categorySet = new Set(result.map((product) => product.category));
      setCategories([...categorySet]);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h1>Shop</h1>
      <div className="container">
        <aside>
          <h2>Categories</h2>
          <ul>
            {categories.map((category) => {
              return <li>{category}</li>;
            })}
          </ul>
        </aside>
        <main>
          {products.map((product) => {
            return (
              <div className="card">
                <img src={product.image} alt={product.title} />
                <h2>{product.title}</h2>
                <p>Category: {product.category}</p>
                <p>Description: {product.description}</p>
              </div>
            );
          })}
        </main>
      </div>
    </>
  );
};

export { Shop };
