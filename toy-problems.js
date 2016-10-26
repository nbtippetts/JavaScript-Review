/* Make sure you do these last */

/*

Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.

plusOneSum([1, 2, 3, 4]); // 14

*/
function sum(array){
 var newArr = array.map(function(num){
    return num + 1;
  });
  return newArr;
}
console.log(sum([1, 2, 3, 4])); // 14


/*

Write a function that accepts a multi dimensional array and returns a flattened version.

flatten([1, 2, [3, [4], 5, 6], 7]) // [1, 2, 3, 4, 5, 6, 7]

*/



function flat(array){
  var newArr = []
  function loopsArray(array){
    array.forEach(function(elem){
      if (Array.isArray(elem)){
        loopsArray(elem);
      }
      else{
        newArr.push(elem);
      }
    });
  }
  loopsArray(array);
  return newArr;
}
console.log(flat([1, 2, [3, [4], 5, 6], 7]));


/*

Given an array [a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN] convert it to [a1, b1, c1, a2, b2, c2, ..., aN, bN, cN]

*/


/*

There is an array of non-negative integers. A second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array.

*/

  //didnt understand what the question was asking so I made two different functions.
  // The first function "shuffle" takes in the first array "arrays" shuffles it and deletes a random value making a new array.
  //Then I passed in the shuffled array and a second array "testArray1" with the same values as the first array "arrays".
  //Then I made a new function "find" and make a empty array "newArr" Then looped through "testArray1" and tested the values from the shuffled array and "testArray1".
  //Then I push the one value in "testArray1" that does not match any of the values in the shuffled array.
  //Giving Me the random number that we deleted from the first array "arrays".

  var arrays = [1, 2, 3, 4, 5, 6, 7, 8]
  var testArray1 = [1, 2, 3, 4, 5, 6, 7, 8]

  function shuffle(array){
   var i = 0,
       j = 0,
       random = Math.floor(Math.random() * array.length);
       diff = null;
   for (i = array.length - 1; i > 0; i -= 1){
     j = Math.floor(Math.random() * array.length);
       diff = array[i]
       array[i] = array[j]
       array[j] = diff;
   }
   console.log("array 1", array)
   array.splice(random, 1);
   console.log("array 2", array)
   return array;
  }


  function find(arr1, arr2){
  // console.log(arr1)
    var newArr = []
    for (var i = 0; i < arr2.length; i++){
        //console.log('index', arr1.indexOf(arr2[i]))
        if (arr1.indexOf(arr2[i]) == -1){
           newArr.push(arr2[i])
           //console.log("this is new array", newArr)
        }
    }
    return newArr
  }

  shuffle(arrays, testArray1);
  console.log('function 2', find(arrays, testArray1));


//this function returns the missing value in arr2

  var arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
  var arr2 = [2, 3, 7, 1, 8, 6, 5]; //should return 4

  function shuffleArray(arr){
     var i = 0,
         j = 0,
         random = Math.floor(Math.random() * arr.length);
         diff = null;
     for (i = arr.length - 1; i > 0; i -= 1){
       j = Math.floor(Math.random() * arr.length);
         diff = arr[i]
         arr[i] = arr[j]
         arr[j] = diff;

     }
     arr.splice(random, 1);
     console.log("array 1", arr)
     return arr;
  }

  function findNumber(array1, array2){
  //console.log(arr1, arr2)
    var newArr = []
    for (var i = 0; i < array1.length; i++){
      //console.log('index', arr1.indexOf(arr2[i]))
      if (array2.indexOf(array1[i]) == -1){
        console.log('array 2', array2)
        return array1[i]

      }
    }
  }
  shuffleArray(arr1, arr2);
  console.log('found missing value', findNumber(arr1, arr2));




/*

Write a function that returns the longest word(s) from a sentence. The function should not return any duplicate words (case-insensitive).

Example

longestWords("You are just an old antidisestablishmentarian") // ["antidisestablishmentarian"]
longestWords("I gave a present to my parents") // ["present", "parents"]
longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo") // ["buffalo"] or ["Buffalo"]

*/


/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/


/*

Remove duplicate characters in a given string keeping only the first occurrences. For example, if the input is ‘tree traversal’ the output will be "tre avsl".

*/



/*
Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

*/
