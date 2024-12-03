import detailsPage from "../pages/productDetails.ejs";
import { addProductToShoppingCart } from "./shoppingCartPage";

async function renderProduct(urlPath) {
    let productId = urlPath.substring("#/products/".length)
    let res = await fetch('https://fakestoreapi.com/products/' + productId);
    let json = await res.json();

    document.querySelector("body").innerHTML = detailsPage({
        product: json,
        formatPrice: formatPrice,
    });
    buttonAddToShoppingCart();
}

export default { renderProduct: renderProduct }

function formatPrice(num) {
    return num.toFixed(2)
}

function buttonAddToShoppingCart() {
    const addToCartButton = document.querySelector(".add-to-cart-button");
    addToCartButton.addEventListener("click", () => {
        addProductToShoppingCart();
    })
}