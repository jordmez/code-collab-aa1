import "./styles.css";
import "./style/footer.css";
import "./style/productDetails.css";

import { productList } from "./productList";
import productsPage from "./page/productsPage";

import homeTemplate from "./template/home.ejs";
import cartTemplate from "./template/cart.ejs";

import partials from "./partials";
import images from "./images";


const createProductList = productList(
    "product-container",
    "product-list-template"
);

// ------- function and event to render the pages
window.addEventListener("popstate", () => {
    renderPage(window.location.hash);
})

function renderPage(urlPath) {
    if (urlPath == "#/cart-page") {
        document.querySelector("body").innerHTML = cartTemplate();

    } else if (urlPath.startsWith("#/products/")) {
        productsPage.renderProduct(urlPath);

    } else {
        document.querySelector("body").innerHTML = homeTemplate({ partials, images });
        createProductList.displayData("https://fakestoreapi.com/products?limit=20");
    }
}
renderPage(window.location.hash);
