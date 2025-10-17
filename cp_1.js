// Step 3: fetching the products

function fetchProductsThen() {
  fetch("https://www.course-api.com/javascript-store-products")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      data.forEach(product => console.log(product.fields.name));
    })
    .catch(error => {
      console.error("An error occurred:", error.message);
    });
}

//Step 4: the Async and await

async function fetchProductsAsync() {
  try {
    const response = await fetch("https://www.course-api.com/javascript-store-products");
    if (!response.ok) throw new Error("Failed to fetch products");
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    handleError(error);
  }
}