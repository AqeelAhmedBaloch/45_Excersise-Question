// Write a function called make_album() that builds an Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing differentalbums. Print each return value to show that Objects are storing the album information correctly.Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

// Assignment 40

function make_album(artist: string, title: string, tracks?: number){
   console.log(`${artist} , ${title} , ${tracks}`)
    // return artist + title + tracks;
}

// Creating albums 

// let album1 = make_album("Atif Aslam ", "Doorie " ,10);
// let album2 = make_album("Nusrat Fateh Ali Khan ", "Mustt Mustt " ,5);
// let album3 = make_album("Abida Parveen ", "Dhamal " ,7);

make_album("Atif Aslam ", "Doorie " ,10);
make_album("Nusrat Fateh Ali Khan ", "Mustt Mustt " ,5);
make_album("Abida Parveen ", "Dhamal " ,7);

// console.log(album1);
// console.log(album2);
// console.log(album3);