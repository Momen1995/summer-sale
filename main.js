"use strict"

document.getElementById("firstProduct-btn").addEventListener("click",function(){
  const firstProductName = getProductDetail("firstProduct-name");
  const firstProductPrice = getProductDetail("firstProduct-price");
   
  setProductName("K. Accessories");
  productPrice(firstProductPrice)
});

document.getElementById("secondProduct-btn").addEventListener("click",function(){
  const secondProductName = getProductDetail("secondProduct-name");
  const secondProductPrice = getProductDetail("secondProduct-price");
  
  setProductName("Accessories");
  productPrice(secondProductPrice)
});

document.getElementById("thirdProduct-btn").addEventListener("click",function(){
  const thirdProductName = getProductDetail("thirdProduct-name");
  const thirdProductPrice = getProductDetail("thirdProduct-price");

  setProductName("Home Cooker");
  productPrice(thirdProductPrice);
});


//get product name and price
function getProductDetail(productDetail){
  const product = document.getElementById(productDetail)
  const productValue = product.textContent;
  return productValue;
}

//setValue
function setProductName(names){
  const productsName = document.getElementById("products-name");
  const li = document.createElement("li");
  li.textContent = names;
  productsName.append(li);
}

//price
function productPrice(productPrice){
  const btnPurchase = document.getElementById("btn-purchase");
  const priceOfProduct = document.getElementById("price")
  const price = parseFloat(priceOfProduct.textContent);
  const product = parseFloat(productPrice)
  priceOfProduct.textContent = (price + product).toFixed(3);
  let total = priceOfProduct.textContent;

  if(total > 0){
    btnPurchase.classList.remove(
      "opacity-50",
      "disabled",
      "cursor-not-allowed"
    );
  }
}