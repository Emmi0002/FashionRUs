const listContainer = document.querySelector(".product_list_container");

const myCategory = new URLSearchParams(window.location.search).get("category");

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
          <a href="produkt.html?id=${product.id}"><img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="t-shirt" /></a>
          ${product.soldout > 0 ? `<div class="SoldOut">Sold Out</div>` : ""}
          <h3>${product.productdisplayname}</h3>
          <div class="grid_1-1">
            <p>${product.articletype} | ${product.brandname}</p>
            <section><p>Read More</p></section>
          </div>
          ${product.discount > 0 ? `<span class="old_price"> ${product.price} DKK</span><br />` : ""} 
          <span class="new_price"> ${Math.round(product.price * (1 - product.discount / 100))} DKK</span><br/>
          ${product.discount > 0 ? `<p class="discountlabel_2"> ${product.discount} %</p><br />` : ""} 
        </section>`;
    })
    .join("");

  console.log(markup);
  listContainer.innerHTML = markup;
}
