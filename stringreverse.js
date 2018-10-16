function FirstReverse(str){ 

    //The split() method splits a String object into an array of string by separating the string into sub strings.["h", "e", "l", "l", "o"]
    // The reverse() method reverses an array in place  ["o", "l", "l", "e", "h"]
    // The join() method joins all elements of an array into a string."olleh"
   return str.split("").reverse().join("");         
}

// console.log("Input a string");
// const str = readline();
const ans = FirstReverse("Hello world");
console.log('Reversed string is', ans);