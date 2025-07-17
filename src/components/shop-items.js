async function shopItems() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      throw new Error("Error while fetching products");
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.log(error);
  }
}

export { shopItems };
