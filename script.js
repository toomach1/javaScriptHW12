const data = JSON.parse(dataBase);
const contentBoxEl = document.querySelector(".content-box");
const cardItemsEl = document.querySelector(".card-items");

data.forEach((element) => {
  const itemEl = document.createElement("div");
  itemEl.classList.add("item");
  const imgItemDivEl = document.createElement("div");
  imgItemDivEl.classList.add("img-item-div");
  const imgItemEl = document.createElement("img");
  imgItemEl.classList.add("img-item");
  imgItemEl.src = element.img;
  imgItemEl.alt = element.name;

  const btnDivEl = document.createElement("div");
  btnDivEl.classList.add("btn-div");
  const btnAddToCart = document.createElement("button");
  btnAddToCart.classList.add("btn-add-to-cart");
  const btnIElCart = document.createElement("i");
  btnIElCart.classList.add("fas", "fa-light", "fa-cart-shopping", "cart-btn");
  const spanElForBtn = document.createElement("span");
  spanElForBtn.classList.add("for-btn");
  btnAddToCart.appendChild(btnIElCart);
  btnAddToCart.appendChild(spanElForBtn);
  spanElForBtn.textContent = " Add to Cart";

  const headCardItemsEl = document.createElement("h3");
  headCardItemsEl.classList.add("head-card-items");
  headCardItemsEl.textContent = "Cart Items";

  const contItemDivEl = document.createElement("div");
  contItemDivEl.classList.add("cont-item-div");
  const headItemEl = document.createElement("h3");
  headItemEl.classList.add("head-item");
  headItemEl.textContent = element.name;
  const descrItemEl = document.createElement("p");
  descrItemEl.classList.add("descr-item");
  descrItemEl.textContent = element.description;
  const priceItemEl = document.createElement("p");
  priceItemEl.classList.add("price-item");
  priceItemEl.textContent = element.price;

  contentBoxEl.appendChild(itemEl);
  itemEl.appendChild(imgItemDivEl);
  imgItemDivEl.appendChild(imgItemEl);
  imgItemDivEl.appendChild(btnDivEl);
  btnDivEl.appendChild(btnAddToCart);

  itemEl.appendChild(contItemDivEl);
  contItemDivEl.appendChild(headItemEl);
  contItemDivEl.appendChild(descrItemEl);
  contItemDivEl.appendChild(priceItemEl);

  btnAddToCart.addEventListener("click", function (e) {
    // добавление карточек в корзину
    console.log(element);
    if (cardItemsEl.querySelector(".head-card-items") == null) {
      cardItemsEl.appendChild(headCardItemsEl);
    }

    const productEl = document.createElement("div");
    productEl.classList.add("product");
    const photoEl = document.createElement("div");
    photoEl.classList.add("photo");
    const imgEl = document.createElement("img");
    imgEl.classList.add("img-card-items");
    imgEl.src = element.img;
    imgEl.alt = element.name;
    const descriptionEl = document.createElement("div");
    descriptionEl.classList.add("description");
    const headEl = document.createElement("div");
    headEl.classList.add("head-items");
    const productHeaderEl = document.createElement("div");
    productHeaderEl.classList.add("product-header");
    const hdrEl = document.createElement("h3");
    hdrEl.classList.add("hdr");
    hdrEl.textContent = element.name;
    const closerEl = document.createElement("div");
    closerEl.classList.add("closer");
    const btnEl = document.createElement("button");
    btnEl.classList.add("btn-closer-card");
    const iEl = document.createElement("i");
    iEl.classList.add("fas", "fa-solid", "fa-xmark");
    btnEl.appendChild(iEl);

    const contentEl = document.createElement("div");
    contentEl.classList.add("content");

    const ArrClassOfP = ["price", "color", "size", "quantity"];
    const ArrClassOfSpanKey = [
      "price-key",
      "color-key",
      "size-key",
      "quantity-key",
    ];
    const ArrContOfSpanKey = ["Price: ", "Color: ", "Size: ", "Quantity: "];
    const ArrClassOfSpanValue = [
      "price-value",
      "color-value",
      "size-value",
      "quantity-value",
    ];
    for (let i = 0; i < 4; i++) {
      const Par = document.createElement("p");
      Par.classList.add(ArrClassOfP[i]);
      const spanKey = document.createElement("span");
      spanKey.classList.add(ArrClassOfSpanKey[i]);
      spanKey.textContent = ArrContOfSpanKey[i];
      const spanValue = document.createElement("span");
      spanValue.classList.add(ArrClassOfSpanValue[i]);
      spanValue.textContent = element[ArrClassOfP[i]];

      contentEl.appendChild(Par);
      Par.appendChild(spanKey);
      Par.appendChild(spanValue);
    }

    cardItemsEl.appendChild(productEl);
    productEl.appendChild(photoEl);
    photoEl.appendChild(imgEl);
    productEl.appendChild(descriptionEl);
    descriptionEl.appendChild(headEl);
    headEl.appendChild(productHeaderEl);
    headEl.appendChild(closerEl);
    closerEl.appendChild(btnEl);
    productHeaderEl.appendChild(hdrEl);
    descriptionEl.appendChild(contentEl);

    btnEl.addEventListener("click", function (e) {
      console.log(e.currentTarget);
      e.currentTarget.parentNode.parentNode.parentNode.parentNode.remove();
      if (cardItemsEl.querySelector(".product") == null) {
        console.log("пусто в корзине - удаляем заголовок");
        // cardItemsEl.removeChild(headCardItemsEl);
        headCardItemsEl.remove();
      } else {
        console.log(" в корзине еще что то есть, заголовок не трогаем");
      }
    });
  });
});