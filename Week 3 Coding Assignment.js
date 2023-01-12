// 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.//
var ages = [3, 9, 23, 64, 2, 8, 28, 93]

/* 1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array 
•	Do not use numbers to reference the last element, find it programmatically, 
•	ages[7] – ages[0] is not allowed! */

console.log(ages[ages.length-1] - ages[0]);



//1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).//
ages[0]= 10;

//1c.	Use a loop to iterate through the array and calculate the average age. //
ages.forEach((ages) =>  {
  console.log(ages)
})
console.log(ages)



//2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.//
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

//2a.	Use a loop to iterate through the array and calculate the average number of letters per name.// 
function test (names){
  for(var i=0, sum=0; i<names.length; i++) {
    sum += names[i];
  }
  return sum/i;
}
console.log(names)

//2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. //
function concatenate (names){
  for( var i=0, sum=0; i<names.length; i++){
    
  }
}
console.log(names)
// 3.	How do you access the last element of any array?
names[names.length -1];

//4.	How do you access the first element of any array?
names[0];

/*5.	Create a new array called nameLengths. Write a loop to iterate over the previously created 
names array and add the length of each name to the nameLengths array.
For example:

namesArray = ["Kelly", "Sam", "Kate"] //given this array
nameLengths = [5, 3, 4] //create this new array*/




/*6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the
elements in the array. */



/*7.	Write a function that takes two parameters, word and n, as arguments and returns 
the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the 
  function to return ‘HelloHelloHello’).*/

function repeatMe(word, n){
  if(typeof(word) == n){
    count =1;
  }
  return repeatMe.concat;
}
console.log(repeatMe("hello"))

  



//8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.
//•	The full name should be the first and the last name separated by a space.

let firstName = "Brandy";
let lastName = "Susewitz";

function fullName (firstName, lastName){
  return firstName + " " + lastName;
}
var fullName = fullName("Brandy", "Susewitz");

console.log(fullName)



/*9.	Write a function that takes an array of numbers and returns true if the sum of all the
 numbers in the array is greater than 100.*/
 let teamNumbers = [10, 52, 19, 21, 3, 8, 88]
 function calculate(teamNumbers){
  var sum = 0;
  for(var i = 0; i < teamNumbers.length; i++){
    sum = sum + teamNumbers[i];
  }
  return sum;
 }
 console.log(calculate([teamNumbers]))

//10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
let agesOfKids = [8, 10, 20]
let = value = agesOfKids.reduce((sum, current) => sum + current, 0);
console.log(value)

/*11.	Write a function that takes two arrays of numbers and returns true 
if the average of the elements in the first array is greater than the average of 
the elements in the second array.*/
let scoresFromSeasonOne = [14, 7, 52, 47]
let scoresFromSeasonTwo = [7, 14, 21, 28]
let result = scoresFromSeasonOne.reduce((sum, current) => sum + current, 0);
console.log(result);
let average = scoresFromSeasonTwo.reduce((sum, current) => sum + current, 0);
console.log(average);

function betterSeason(){
  if(result.length > average.length)
  return betterSeason
}
console.log(result)



/*12.	Write a function called willBuyDrink that takes a boolean isHotOutside, 
//and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is 
//greater than 10.50.*/
function willBuyDrink(){

  return(isHotOutside = true && moneyInPocket >= 10.50)
}

console.log('I will buy that drink!')
      

/*13.	Create a function of your own that solves a problem. 
•	In comments, write what the function does and why you created it.
//Need to go shopping but only on Wednesday and if there is 100 or more in my bank then return true*/

function willGoShopping(){

  return(dayOfWeek = Wednesday && moneyInAccount >= 200)
}

console.log("Go get groceries.")