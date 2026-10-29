// Q6: E-Commerce Dashboard - Product Card Fetcher
// Run in a browser or in a recent Node.js version with built-in fetch.

const PRODUCTS_API = "https://fakestoreapi.com/products";

async function loadProducts() {
  try {
    const response = await fetch(PRODUCTS_API);

    // fetch does not reject automatically for HTTP error status codes.
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const products = await response.json();

    products.forEach((product) => {
      console.log(`Product: ${product.title}`);
      console.log(`Price: $${Number(product.price).toFixed(2)}`);
      console.log(`Image: ${product.image}`);
      console.log("------------------------------");
    });

    // Optional browser bonus: create product cards dynamically.
    if (typeof document !== "undefined") {
      let productContainer = document.querySelector("#product-container");

      if (!productContainer) {
        productContainer = document.createElement("div");
        productContainer.id = "product-container";
        document.body.appendChild(productContainer);
      }

      products.forEach((product) => {
        const card = document.createElement("article");
        const title = document.createElement("h3");
        const price = document.createElement("p");
        const image = document.createElement("img");

        title.textContent = product.title;
        price.textContent = `$${Number(product.price).toFixed(2)}`;
        image.src = product.image;
        image.alt = product.title;
        image.width = 120;

        card.append(title, price, image);
        productContainer.appendChild(card);
      });
    }
  } catch (error) {
    console.error("Failed to load products. Please try again.", error);
  }
}

loadProducts();
