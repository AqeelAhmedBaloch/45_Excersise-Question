/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
*/

const myFriends : string[] = ["Areeb","Hasnain","Anus"];

console.log(myFriends);

console.log('we have 3 more friends to inivite on dinner');

// adding three more friends 
// add at begning

myFriends.unshift("Waseem");
console.log(myFriends);

// add at middle
myFriends.splice(2,0,"Omair");
console.log(myFriends);


// Add at last
myFriends.push("Aneel");
console.log(myFriends);
 
// print all friends alongwith message

// myFriends.map((friend)=>{
//     console.log(`Mr. ${friend} you are invited to my dinner.`)
// })

for (let i = 0; i < myFriends.length; i++) {
    console.log(`Mr. ${myFriends[i]} you are invited to my dinner`);    
}
