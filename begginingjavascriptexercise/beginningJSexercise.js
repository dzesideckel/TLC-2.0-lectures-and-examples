// Beginning JavaScript Exercise

// Complete this with your predetermined partner and discuss how to solve each problem with them.

// 1. Write a function that replaces console.log with c. Print out three statements using this new function. NOTE: be sure to use this for all the other problems! It will make them easier to write.

let c = console;
c=c.log;
c('hello world');

// 2. Write a function that takes a first name, last name, and age, and makes a new object with that information if at least one of those values is defined (use a conditional).

function make_person(first,last,age){
  let first = (Jesse);
  let last = (Dekel);
  let age = (24);
};

// 3. Make two objects for two different people using the function in #2.

function make_person(first,last,age){
  first = (Mike);
  last = (Wazowski);
  age = (420);
};

function make_person(first,last,age){
  first = (Keira);
  last = (Knightley);
  age = (99);
};

// 4. Modify the function in #2 to have default arguments that result in an unknown or anonymous person.

var mp = function (make_person){
  var originalResult = old.apply(first,last,age);
  return orignalResult +1;
}

// 5. Make an object with at least two methods and two properties. Each method should have two or more steps in it.

function boilWater(water,pasta,pot){
  c("we are going to boil " + water +" ounces of water with "+ pasta +" in a "+ pot +" ounce pot ");
}
boilWater(30,"spaghetti",120);

c=boilWater;

// 6. Make two identical IIFEs that do something and only differ in the placement of the calling parentheses.



// 7. Make a function with a return value that does some arithmetic. Assign this function to a variable. What is the value of the variable?

function makeSandwich(meat,vegetable,bread){
  let sandwich = meat+vegetable+bread;

  return sandwich;
}

let meat1="ham";
let veg1="lettuce";
let bread1="wheat";

function makeSandwich(meat,vegetable,bread){
  let sandwich=meat+vegetable+bread;
  return sandwich;
}

let hamSandwich = makeSandwich(meat1,veg1,bread1); // hamSandwich="hamlettucewheat";


// 8. Make an object that adds people to a directory (Hint: use the function created in question #2).
// The object should start with an empty list of people as the directory itself
// and add objects for each person with (at least) their first name, last name, and age.
// It should also have the following methods which do the obvious things they indicate:
// add, remove, and modify. Add 6 people to the directory, remove one, and modify another.





// 9. Make a for loop that is supposed to type something 10 times.

// 10. Make a while loop that subtracts a number from a larger number and terminates eventually. Throw in a print statement for each iteration of the loop.

// 11. Make a do...while loop that does something at least 3 times but no more than 13 times.

// 12. Use the Array keys method to create an array of the first 1000 whole numbers.

// 13. Use a for loop to print all the first names in the directory object you created. If any first name is undefined, warn the user (use console.warn and make a conditional).

// 14. Use a forEach loop on the directory list inside of the directory object itself to print out all the last names in a template literal that puts each one in a full sentence.

// 15. Make a function that asks how old each person is, one by one, in the directory, and responds (to itself) with their age. Incorporate your favorite variety of loop to get the job done.