console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = []


//addItem
function addItem (item) {
    basket.push(item);
    return true
}//end addItem 

console.log('adding item, expect true' ,addItem('item'));
console.log('Basket:' , basket);
console.log('adding item, expect true' , addItem('anotherItem'));
console.log('Basket:', basket);
console.log('adding item, expect true' ,addItem('cheese'));
console.log('Basket:' , basket);

//listItems
function listItems() {
    for (let i=0; i < basket.length; i++) {
        console.log(basket[i]);
    }
}//end listItems

//I'm not quite sure how to get rid of the "undefined"

console.log(listItems())


console.log('basket length:' , basket.length);

// empty

//I'm very stuck on this one


console.log('basket before pop' , basket);

basket.pop()

console.log('basket after pop' , basket);

basket.push('carrots');

console.log ('added another item, basket is now:' , basket);

function empty() {
    while (basket.length > 0) {
        basket.pop();
    }
} 

console.log(empty());

console.log('Basket after empty:', basket);
console.log('basket length after empty:' , basket.length);
