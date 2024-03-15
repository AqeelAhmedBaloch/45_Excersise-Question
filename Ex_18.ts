/*
Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/

const myPlace : string [] = ["Karachi", "UK", "Larkana", "Sukkur" , "Hyderabad","Quetta"];

console.log("Original Array: "+ "["+ myPlace +"]\n");

// make a copy of an array
let copyOfArry = myPlace.slice();
let sortedArry = copyOfArry.sort();
console.log("Sorted Array : " + "["+ sortedArry +"]\n");

// print original array
console.log("Original Array: "+ "["+ myPlace +"]\n");

// reversing original array

let copyOfArry2 = myPlace.slice();
let reverseOriginal = copyOfArry2.reverse();
console.log("Reverse Array: "+ "["+ reverseOriginal +"]\n");


// print original array
console.log("Original Array: "+ "["+ myPlace +"]\n");

// reverse the order to original array
let reverseOriginal1 = myPlace.reverse();
console.log("Reverse Array: "+ "["+ reverseOriginal1 +"]\n");

let againReverse = reverseOriginal1.reverse();
console.log("Again Reverse Array: "+ "["+ againReverse +"]\n");

// sorting original array
let sortOrigArray = myPlace.sort();
console.log("Sort Original Array: "+ "["+ sortOrigArray +"]\n");

let reverseSortedArray = sortOrigArray.reverse();
console.log("Reverse Sorted Array:"+ "["+ reverseSortedArray +"]");




