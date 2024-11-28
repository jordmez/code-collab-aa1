export const productList = () => {
  const fetchData = async () => {
    const url = "https://fakestoreapi.com/products?limit=20";

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log("json data:", data);
      return data;
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const formatPrice = (num) => {
    return num.toFixed(2);
  };

  const displayData = async () => {
    const productSection = document.getElementById("product-container");

    const data = await fetchData();
    console.log("data from fetch:", data);

    data.forEach((product) => {
      const productListTemplate = document.getElementById(
        "product-list-template"
      );
      const cloneProductListTemplate =
        productListTemplate.content.cloneNode(true);

      const productImage =
        cloneProductListTemplate.querySelector(".product-image");
      productImage.setAttribute("src", product.image);

      const productTitle =
        cloneProductListTemplate.querySelector(".product-title");
      productTitle.textContent = product.title;

      const productDescription = cloneProductListTemplate.querySelector(
        ".product-description"
      );
      productDescription.textContent = product.description;

      const productPrice =
        cloneProductListTemplate.querySelector(".product-price");

      const number = product.price;
      const formattedPrice = formatPrice(number);

      productPrice.textContent = `$ ${formattedPrice}`;

      productSection.appendChild(cloneProductListTemplate);
    });
  };

  displayData();
};
