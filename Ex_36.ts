// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.


// 1st Sanerio
// function make_shirt(msize: number, label: string) {
// return `My shirt size is ${msize} and label is ${label}`;
// }
// let myFunc = make_shirt(37,"The Sunnay Day");

// how to print in console.
// console.log(myFunc);


// 2nd Sanerio
let myFunc = (size : number, label: string) =>{
    return size + label;
}

console.log(myFunc(36, " Cool Boy"));