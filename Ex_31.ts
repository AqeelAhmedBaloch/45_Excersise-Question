/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.
*/

import { log } from "console";

let userNewnames :string[] = ["Aqeel","Waseem","Omair","Admin","Areeb","Murtaza"];

// Show Blank Array
userNewnames = [];
// console.log(userNewnames);

if (userNewnames.length > 0) {
    for (let i = 0; i < userNewnames.length; i++) {
        if (userNewnames[i] == "Admin") {
            console.log(`\nHello, ${userNewnames[i]} would you like to see a status report?\n`);
        }else{
            console.log(`Hello, ${userNewnames[i]} thank you for loggin in again`);
        }
    }
}else{
    console.log('We need to find some users!')
}