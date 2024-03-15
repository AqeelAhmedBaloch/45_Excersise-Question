// Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

function discribe_City(nameOfCity : string , counstry : string = "Pakistan"){
    return `${nameOfCity} is in ${counstry}`;
}

// Three City

let city1 = discribe_City("Karachi");
let city2 = discribe_City("Hyderabad");
let city3 = discribe_City("Larkhana");
let city4 = discribe_City("Dubia","United Arab Emaraites");

console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);