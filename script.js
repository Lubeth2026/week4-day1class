"use strict";

console.log("Hello!");

console.log("Hello!");
//Looping Practice
const someNums = [10, 15, 6, 14, 111, 100];
console.log(someNums);
//*let i = 0
//*i < 6
//*i++
for (let i = 0; i < 6; i++) {
  console.log(someNums[i]);
}
//Array Practice
someNums.forEach(function (num) {
  console.log(num);
});

//Tailwinds Css with Java to decorate//
///////////////////////////////////////////
const item1Styles = ["bg-[lightblue]"];
const itemStylez = [
  "p-4",
  "text-color-[brown]",
  "w-full",
  "text-center",
  "rounded",
];
const item2Styles = ["bg-[lightgreen]"];
const item2Stylez = [
  "p-4",
  "text-color-[brown]",
  "w-full",
  "text-center",
  "rounded",
];
const item3Styles = ["bg-[lightblue]"];
const item3Stylez = [
  "p-4",
  "text-color-[brown]",
  "w-full",
  "text-center",
  "rounded",
];

const item1 = document.querySelector("#item-1");
const itemElements = document.querySelectorAll("item");

console.log(itemElements);

itemElements.forEach((item) => {
  item.classList.add(...itemStyles);
});

item1.classList.add(...item1Styles, ...itemStylez);

const item2 = document.querySelector("#item-2");
item2.classList.add(...item2Styles, ...item2Stylez);

const item3 = document.querySelector("#item-3");
item3.classList.add(...item3Styles, ...item3Stylez);
