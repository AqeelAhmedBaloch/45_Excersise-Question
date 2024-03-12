// Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// let myName : string = "aqeel ahmed";

// console.log("ToLowerCase :" +" "+myName);
// console.log("ToUpperCase :" +" "+myName.toUpperCase());
// console.log("ToTitleCase :" +" "+myName.charAt(0).toUpperCase()+ myName.slice(1,5) +" "+ myName.charAt(6).toUpperCase() + myName.slice(7,11));


let Personalmsg:string ="muhammad waseem";
let LowerCaseName:string=Personalmsg.toLowerCase();
let UpperCaseName:string=Personalmsg.toUpperCase();

let TitleCaseName:string[]=[];
let word=LowerCaseName.split(' ');
 
for(let i=0; i<word.length; i++){
    TitleCaseName[i]= word[i].charAt(0).toUpperCase()+word[i].slice(1);
}

console.log("In LowerCase : " + LowerCaseName);
console.log("In UpperCase : " + UpperCaseName);
console.log("In TitleCase : " + TitleCaseName.join(' '));