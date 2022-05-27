console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = []


//addItem
function addItem (item) {
    basket.push(item);
    return true
}//end addItem

console.log(addItem('item'));
console.log('Basket:' , basket);
console.log(addItem('anotherItem'));
console.log('Basket:', basket);

//listItems
function listItems() {
    for (let i=0; i < basket.length; i++) {
        console.log(basket[i]);
    }
}
// console.log(listItems())