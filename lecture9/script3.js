const products = [
  { product: "milk", price: 3.2 },
  { product: "bread", price: 1.5 },
  { product: "eggs", price: 4.0 },
  { product: "cheese", price: 6.3 },
  { product: "apples", price: 2.1 }
];

function sumProductPrices(products) {
    let total = 0;
    
    for (const item of products) {
        total += item.price;
    }
    
    return total;
}

console.log(sumProductPrices(products));