import { fetchApi } from "./libs/fetchApi.js";
import { renderHTMLToTheDom } from "./libs/displayInHtml.js";
import { filteringAnArray } from "./libs/filterArray.js";

let data = await fetchApi("https://fakestoreapi.com/products/");

let productCards = "";
const loading = document.querySelector(".loading");

data.forEach((element) => {
  loading.innerHTML = "";

  productCards += ` 
  <div class="card" style="width: 18rem;">
  <img src="${element.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${element.title}</h5>
    <p class="card-text"> Price ${element.price}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;
});

renderHTMLToTheDom(productCards, ".searchResults");

const search = document.querySelector(".search");
const searchResults = document.querySelector(".searchResults");

search.onkeyup = function () {
  searchResults.innerHTML = "";

  let filteredArray = filteringAnArray(data, search.value);
  let filteredHTML = "";

  filteredArray.forEach((element) => {
    filteredHTML += `

    <div class="card" style="width: 18rem;">
    <img src="${element.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${element.title}</h5>
      <p class="card-text">${element.price}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
   
    `;
  });
  renderHTMLToTheDom(filteredHTML, ".searchResults");
};
