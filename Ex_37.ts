// 37.	Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


// 1st Sanerio

// function make_shirt(msize: string, label: string) {
// return msize + label;
// }
// let myFunc = make_shirt("Large","The Sunnay Day");

// how to print in console.
// console.log(myFunc);


// Make large defauld 2nd Sanerio
// function make_shirt(label: string ,size : string = "Large" ){
//     return  size + label;
// }

// let myFunction = make_shirt(" I Love TypeScript")

// console.log(myFunction);

// Make medium defauld 2nd Sanerio
// function make_shirt(label: string ,size : string = "Medium" ){
//     return  size + label;
// }

// let myFunction = make_shirt(" I Love TypeScript")

// console.log(myFunction);

// Making shirt of Any Size
function make_shirt(size: string ,label : string){
    return  size + label;
}

let myFunction = make_shirt("Any Size" , " I Love TypeScript");

console.log(myFunction);