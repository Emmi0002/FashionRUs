const listContainer = document.querySelector(".product_list_container");

myCategory = new URLSearchParams(window.location.search).get("category");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${myCategory}`)
  .then((response) => response.json())
  .then(showList);

function showList(products) {
  console.log(products);

  let markup = "";

  products
    .map((product) => {
      markup += `
        <section>
          <a href="produkt.html"><img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="t-shirt" /></a>
          <h3>${product.productdisplayname}</h3>
          <div class="grid_1-1">
            <p>${product.articletype} | ${product.brandname}</p>
            <section><p>Read More</p></section>
          </div>
          <p>${product.price} DKK</p>
        </section>`;
    })
    .join("");

  console.log(markup);
  listContainer.innerHTML = markup;
}
