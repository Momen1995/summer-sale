"use strict"

document.getElementById("firstProduct-btn").addEventListener("click",function(){
  const firstProductName = getProductDetail("firstProduct-name");
  const firstProductPrice = getProductDetail("firstProduct-price");
  
  setProductName("K. Accessories");
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