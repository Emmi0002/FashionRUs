console.log("prøve..");

let productId = 1545;
let productContainer = document.querySelector(".product_container");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
     <main class="gridProdukt_1-1">
      <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="sko" />
      <div>
        <h3>${data.productdisplayname}</h3>
        <p>${data.price} DKK</p>
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
        <p class="InventoryNr">Inventory Number: ${productId}</p>
        <p class="AddToBasket">ADD TO BASKET</p>
      </div>
    </main>`;
  });
