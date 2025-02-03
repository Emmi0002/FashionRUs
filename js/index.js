console.log("script loaded..");

fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then((response) => response.json())
  .then(showCategories);

function showCategories(data) {
  console.log("mine data er:", data);

  markup = data
    .map(
      (element) => `
  <li><a href="produktliste.html?category=${element.category}">${element.category}</a></li>
  `
    )
    .join("");

  console.log("min markup er:", markup);
  document.querySelector("ul").innerHTML = markup;
}
