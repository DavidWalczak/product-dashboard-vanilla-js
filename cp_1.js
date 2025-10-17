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

// Step 5: Display the first 5 products

function displayProducts(products) {
  const container = document.querySelector("#product-container");
  container.innerHTML = ""; // Clear any existing content

  products.slice(0, 5).forEach(product => {
    const { name, price, image } = product.fields;
    const imageUrl = image[0].url;
    const priceInDollars = (price / 100).toFixed(2);

    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${imageUrl}" alt="${name}">
      <div class="product-info">
        <h3>${name}</h3>
        <p>$${priceInDollars}</p>
      </div>
    `;

    container.appendChild(card);
  });
}

