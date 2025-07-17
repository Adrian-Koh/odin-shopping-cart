import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Shop.css";
import { shopItems } from "./shop-items";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await shopItems();
      console.log(result);

      setProducts(result);
    };

    fetchProducts();
  }, []);
  return (
    <>
      <h1>Shop</h1>
      <Link to="home">Home</Link>
      <ul>
        {products.map((product) => {
          return (
            <li>
              <img src={product.image} alt={product.title} />
              <h2>{product.title}</h2>
              <p>Category: {product.category}</p>
              <p>Description: {product.description}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export { Shop };
