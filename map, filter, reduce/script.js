//map
console.log ('==== MAP =====');
const apple = {
    value: 2,
}

const orange = {
    value: 3,
}

function mapWithThis (array, thisArg) {
    return array.map(function(item){
        return item * this.value;
    }, thisArg);
}

const nums = [1,3];

console.log ('this -> apple', mapWithThis(nums, apple));
console.log ('this -> orange', mapWithThis(nums, orange));

function mapWithoutThis (array) {
    return array.map(function (item){
        return item * 2;
    });
}

const nums2 = [10, 25, 30, 45, 60];

console.log ('without thisArg ->', mapWithoutThis(nums2));

//filter
console.log ('==== FILTER =====');

function filterPairs (array) {
    return array.filter(isPair)
}
function isPair (number){
    return number % 2 === 0;
}

console.log ('even numbers ->',filterPairs(nums2));

//reduce
console.log ('==== REDUCE =====');

function sumAll (array){
    return array.reduce(function (prev, current) {
        console.log ({prev});
        console.log ({current});
        return prev + current;
    }, 0)
}
const arrayToSum = [1, 2];

console.log ('the shum is ->', sumAll(arrayToSum));

//market shopping list

const list = [
    {name: 'towel', price: 10},
    {name: 'shampoo', price: 5}, 
    {name: 'soap', price: 2}, 
]

console.log ('===Buy exercise===')
const balance = 50;
console.log ('your balance is ->', balance)

function buy (balance, list) {
    return list.reduce (function (prev, current, index){
        console.log ('round', index + 1);
        console.log ({prev});
        console.log ({current});

        return prev - current.price;

    }, balance);
}

console.log('your balance is ->', buy(balance, list))