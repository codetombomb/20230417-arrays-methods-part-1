/* 
Example 1 - Basic usage
Loop through the cart array and log each item to the console
*/
const cart = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes']

// cart.forEach((element) => console.log(element))

// cart.forEach((element) => {
// console.log(element)
// })

// cart.forEach(function(element){console.log(element)})

// cart.forEach(function(element){
//     console.log(element)
// })

// const logger = function(element){
//     console.log(element)
// }

// cart.forEach(logger)

// cart.forEach(console.log)


// ====================================
/*
    Example 2 - Create  a function, totalPrice, that 
    uses the forEach method to loop through the items 
    array and returns the total price of all the items.
*/

const items = [ 
    {id: 1, product: 'Laptop', price: 1000}, 
    {id: 2, product: 'Smartphone', price: 800}, 
    {id: 3, product: 'Tablet', price: 500}, 
    {id: 4, product: 'Camera', price: 700}, 
    {id: 5, product: 'Smartwatch', price: 300} 
]

const totalPrice = (arr) => {
    let counter = 0
    arr.forEach((item) => {
        counter += item.price
        console.log(counter)
    })
    return counter
}

totalPrice(items)

