// Make an array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


// Assignment 41
// Define an array of magician names

let magicianNames = ["Aqeel", "Waseem", "Areeb", "Omair"];

function show_magicians() {
    for (let item of magicianNames) {
        console.log(item);
    }
};

show_magicians();