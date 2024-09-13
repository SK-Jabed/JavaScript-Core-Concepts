const numbers = [45, 65, 24, 45, 69, 56];

for(let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}

for(const number of numbers) {
    console.log(number);
}

const products = [
    {id: "Iphone 16 Pro max", price: 150000},
    {id: "Samsung Galaxy S22 Ultra", price: 145000},
    {id: "Vivo V17 pro", price: 30000},
    {id: "Mac Book Air", price: 140000},
    {id: "HP 250 G9", price: 66000},
    {id: "Walton Fridge", price: 48000},
    {id: "Walton Phone", price: 1200}
]

for(const product of products) {
    console.log(product);
}

function matchedProducts(products, search) {
    const matched = [];
    for(const product of products) {
        if(product.id.toUpperCase().includes(search.toUpperCase())) {
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, "pro");
console.log(result);