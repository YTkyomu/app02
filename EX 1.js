//foreach start
var colors = ['red', 'blue', 'green'];

// loop method
for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// forEach method
colors.forEach(
  (color) => console.log(color)
);

// use forEach to add HTML elements
$(document).ready(function(){
  colors.forEach(
    (color) => $('body').append(`<div>${color}</div>`)
  );
});
//foreach end

//map start
var numbers = [1, 2, 3];
var doublenumbers;

// loop method
doublenumbers = [];
for (var i = 0; i < numbers.length; i++) {
  doublenumbers.push(numbers[i] * 2);
}
console.log(doublenumbers);


// map method
doublenumbers = [];
doublenumbers = numbers.map(
  (number) => number * 2
);
console.log(doublenumbers);

var cars = [
	{model: 'Buick', price:'cheap'},
	{model: 'BMW', price:'expensive'}
];

var prices = cars.map(car=>car.price);
console.log(prices);

// use map to add HTML elements
$(document).ready(function(){
  const carModel = cars.map(car=>`<div>${car.model}</div>`);
  $('body').append(carModel);
});
//map end

//push start
let a = ["1", "2"];
console.log(a);

a.push('3');
console.log(a);
//push end

//slice start
let a = ['zero', 'one', 'two', 'three'];
let sliced = a.slice(1,3);

console.log(a);//['zero', 'one', 'two', 'three']
console.log(sliced);//['one', 'two']
//slice end

//spread-rest start
function adder (base, ...numbers) {
	numbers.forEach(function (number) {
		console.log(base + number);
	});
}

adder(3, 5, 7, 1);
//spread-rest end
