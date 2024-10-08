//Task 1
const groceries = ["fruits", "eggs", "milk", "steak", "vegetables", "chicken"];

//Task 2
console.log(groceries[1]);

//Task 3
console.log(groceries.length);

//Task 4
let lastArr = groceries.length - 1;
console.log(groceries[lastArr]);

//Task 5
console.log(groceries.pop());

//Task 6
groceries.push("cheese", "fries");
console.log(groceries);

//Task 7
const firstThreeItems = groceries.slice(0, 3);
console.log(firstThreeItems);

//Challenge 1
groceries.splice(2, 1);
console.log(groceries);

//Challenge 2
groceries.unshift("sour cream");
console.log(groceries);

//Challenge 3
groceries.splice(0, 2, "ketchup", "chili");
console.log(groceries);
