'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function named `addOne` that takes an array of numbers, and returns a new array of the numbers, incremented by 1.

Use `forEach` to loop over the input array and work with each value.  Push the new value into a local array. Return the local array;
------------------------------------------------------------------------------------------------ */

const addOne = (arr) => {
  let newArr = [];
  arr.forEach(num => newArr.push(num + 1));
  return newArr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named `addExclamation` that takes an array of strings, and returns a new array of the same strings with an "!" added to the end.
------------------------------------------------------------------------------------------------ */

const addExclamation = (arr) => {
  let newArr = [];
  arr.forEach(str => newArr.push(str + '!'));
  return newArr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named `allUpperCase` that takes an array of strings, and returns a new array of the strings converted to upper case.
------------------------------------------------------------------------------------------------ */

const allUpperCase = (arr) => {
  let newArr = [];
  arr.forEach(str => newArr.push(str.toUpperCase()));
  return newArr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named `greeting` that takes in a single string and returns the string in all uppercase letters, and followed by an "!".

Then, write a function named `speaker` that takes in an array of strings and a callback function.
------------------------------------------------------------------------------------------------ */

const greeting = (word) => word.toUpperCase() + '!';

const speaker = (words, callback) => {
  let newArr = [];
  words.forEach(word => newArr.push(callback(word)));
  return newArr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named addValues that takes in an array and a value and pushes the value into the array. This function does not need a return statement.
------------------------------------------------------------------------------------------------ */

const addValues = (arr, value) => {
  arr.push(value);
};

const addNumbers = (num, arr, times, callback) => {
  for (let i = 0; i < times; i++) {
    callback(arr, num);
  }
  return arr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

Write a function named createList that takes in an array of the current store inventory.

This function should use forEach to populate your grocery list based on the store's inventory. If the item is available, add it to your list. Return the final list.
------------------------------------------------------------------------------------------------ */

const createList = (availableItems) => {
  let groceryList = [];
  availableItems.forEach(item => {
    if (item.available) groceryList.push(item.name);
  });
  return groceryList;
};

/* ------------------------------------------------------------------------------------------------
STRETCH - CHALLENGE 7

Write a function named fizzbuzz that takes in an array of numbers.
------------------------------------------------------------------------------------------------ */

const fizzbuzz = (arr) => {
  let result = [];
  arr.forEach(num => {
    if (num % 3 === 0 && num % 5 === 0) {
      result.push('Fizz Buzz');
    } else if (num % 3 === 0) {
      result.push('Fizz');
    } else if (num % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(num);
    }
  });
  return result;
};
