//Find the last element of the following arrays.arr1 = [3,7,34,90,12]arr2 = [true, "green", "where",12,56]


let num = [3,7,34,90,12];
console.log('last item',num.slice(-1));

let x= [true, "green", "where",12,56];

console.log('last item',x.slice(-1));
//Write a JS program that will join the following array elements into a stringmyPets = ["Cow", "Bird", "Snake", "Dog"];

let stringmyPets = ["Cow", "Bird", "Snake", "Dog"];

 console.log(stringmyPets.join(""))

//Write a JS script to sort the following array itemsvar arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];

let arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ]; 

     console.log((arr3.sort()))

//Write a program to remove duplicates from the following array.Console the array without duplicates, and console another array that only contains the duplicates
//let arr = ["boy", "man", "girl",            "school", "girl", "woman"];

let arr = ["boy", "man", "girl",
          "boy", "man", "girl"];
 
function removeDuplicates(arr) {
    return [...new Set(arr)];

}
 
console.log(removeDuplicates(arr));

//Write a JS script to search for the following word in the array."food"If the word is present, return it else return "the search word was not found"let arr5 = ["the", "way", "x", 4];

let arr5=["the", "way", "x", 4];
if ((arr5.includes("food"))) {
    console.log({arr5});
  }
  
else {
    console.log("the search was not found.");
  }
  


//Write a JS script to sort the following string:let word = "renniw"

let words = "renniw";
console.log(words.split(' ').sort().join(' '));



//Using an array of fruits with length 10 , insert 'Tomato' at the 5th index 

let fruits = ["Mango","Orange","Passion","Apple","Pineapple","Banana","Kiwi","Watermelon","Tomatoe","Berry"]
fruits.slice(5,0, "Strawberry")
console.log((fruits))






