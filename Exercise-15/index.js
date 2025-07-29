const products = [
  "Camiseta de Metallica",
  "Pantalón vaquero",
  "Gorra de beisbol",
  "Camiseta de Basket",
  "Cinturón de Orión",
  "AC/DC Camiseta",
];

function productFinder(productList, productParam) {
  console.log(`Buscando el producto: ${productParam}`);
   let items = {};
  for (let i = 0; i < productList.length; i++) {
    if (productList[i].includes(productParam)) {
        items[productList[i]] = (items[productList[i]] || 0) + 1;
       }
  }
  return items;
}
console.log(productFinder(products, "Camiseta"));
