console.log("prøve..");

// let productId = 1545;
let productContainer = document.querySelector(".product_container");

const myProduct = new URLSearchParams(window.location.search).get("id");

fetch(`https://kea-alt-del.dk/t7/api/products/${myProduct}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
     <main class="gridProdukt_1-1">
      <img src="https://kea-alt-del.dk/t7/images/webp/640/${myProduct}.webp" alt="product image" />
      ${data.soldout > 0 ? `<div class="SoldOut_product">Sold Out</div>` : ""}
      <div>
        <h3>${data.productdisplayname}</h3>
        ${data.discount > 0 ? `<span class="old_price"> ${data.price} DKK</span><br />` : ""}
        ${data.discount < 0 ? `<p class="old_price">${data.price} DKK</p><br />` : ""}   
        <p class="new_price">${Math.round(data.price * (1 - data.discount / 100))} DKK</p><br />
        ${data.discount > 0 ? `<p class="discountlabel_product"> ${data.discount} %</p><br />` : ""}
        <p>Color: ${data.basecolour}</p>
        <p class="size">Size</p>
        <section class="grid_1-1-1">
          <p>XS</p>
          <p>S</p>
          <p>M</p>
          <p>L</p>
          <p>XL</p>
          <p>XXL</p>
        </section>
        <p class="InventoryNr">Inventory Number: ${myProduct}</p>
        <p class="AddToBasket">ADD TO BASKET</p>
      </div>
    </main>`;
  });
