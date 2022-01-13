const Guys = [
  {
    id: 1,
    name: "ben",
    age: 5,
  },
  {
    id: 2,
    name: "james",
    age: 9,
  },
];
// working with the objs that are above ben=0 james= 1
const calculateAgeInDogYears = (guy) => {
  const dogYears = guy / 7;
  return dogYears;
};
console.log(calculateAgeInDogYears(1));

// simple calculator the easiert way
const simpleCalculator = (age) => {
  return age / 7;
  // ^^^when returning you are telling the cpu to remember the value rather than just logging the value
};
console.log(simpleCalculator(10));

//when logging you get the value but ***remember you are just logging and not saving the value thing about the impact to string interperlation
const simpleCalculator2 = (age) => {
  console.log(age / 7);
};

// to call a function dont forget ()
simpleCalculator2(90);

// to check 1st instance with ojs below the .lenght example
//console.log(Guys.length)
//console.log(calculateAgeInDogYears(Guys[1]))

//calling simple calculator for testing
console.log(simpleCalculator(84));

const dogYearAge = simpleCalculator(21);

console.log(`My dog year age is ${dogYearAge}`);

const myFavorite = (breed) => {
  // took this out to make my code work without it console.log(`My favorite dog breed is ${breed}`)
  // the if, else statement below is telling the cpu that I would like a return of "I like cats" when the input value is meow.
  if (breed === "meow") {
    return "I like cats";
    //else( or unless the value is anything else)
  } else {
    return `My favorite animal breed is ${breed}`;
  }
}; //so below I am testing the log with a new string to test my app comnds stated in the function
//
const puppy = myFavorite("guppie");

//below I have put in + puppy but Note that puppy can also be put into the function using string interpolation. the practice of string interpolation is best practice when using the fuctions with more information to input and when you have more varables.
console.log("When it comes to pets," + "puppy");
console.log(myFavorite("meow"));

const add = (number1, number2) => {
  // the numbers above are the "parameter" or inputs for the function
  const sum = number1 + number2;
  // created varible "sum" that gives the instructions to the function "add" and its paramaters
  return sum;
  // returning will complete the task above
};

console.log(add(5, 18));
// logging the addition of the 2 numbers in the console

const go = (direction, speed) => {
  // we are creating a condition for the car to log speed, and direction by setting them as paramiters, or arguments
  if (speed >= 75) {
    // ^^the codition above is defining the speed of the car  being above 75 to add a message
    return `The car is moving ${direction} at ${speed}mph SLOW DOWN`;
  } else {
    //< this else ststement is to show the messages to when the car id below 75
    return `The car is moving ${direction} at ${speed}`;
  } // we do the else if to clearly define what to do when the speed is past a certain limit
};
console.log(go("north", 40));

const evenOrOdd = (myNumber) => {
  if (myNumber % 2 === 0) {
    // the % is modulo which will devide the number by 2, this line also checkes to see that the remander of the division is 0
    return "even";
  } else {
    return "odd";
  }
};
// ^^ reminber to format like sherwin showed you for clarity on the steps and what you are commanding the cpu to do!!

console.log(evenOrOdd(10));

const words = [
  "The",
  "killing",
  "complex",
  "houses",
  "married",
  "kittens",
  "and",
  "single",
  "soldiers",
  "and",
  "their",
  "kleptomaniacal",
  "families",
];

//this is where will put all the not k words for organizational purposes

// this function is respondsible for filtering through the words array to remove words that begin with k.

//new steps: interate the array of words doing this with foreach  in one instance, and then filter
const filterOutKay = (arrayOfWords) => {
  return arrayOfWords.filter((word) => !word.startsWith("k"));
  // const arrayWithoutKay = []
  // arrayOfWords.forEach((currentWord) => {
  //     if (currentWord.startsWith("k")) {
  //         return null
  //     } else {
  //         return arrayWithoutKay.push(currentWord)

  //     }
  // })
  // return arrayWithoutKay
};

/*
    ^Function to filter out `k` words
    (Google 'javascript startswith' to get started)
 */

const theSentanceMaker = (arrayOfWords) => {
  return arrayOfWords.join(" ");
};
/*
    ^join the new array of words
    Function to build a single string from the array
    (Google 'javascript combine all items in array' to get started)
 */

const myWords = filterOutKay(words);
console.log(myWords);
/*
    ^Invoke the filtering function and store its return value
 */

const sentance = theSentanceMaker(myWords);
console.log(sentance);
/*
    Invoke the string building function, and pass the
    return value of the previous function as an argument
*/

// Goal: find fish catching chances and returns true of false
// there is no input needed,
// const catching = () => {
//   let catchRate = Math.random() * 3; //not sure if this is correct
//   if (0 < catchRate < 1) {
//     return console.log(" Sven hooked a tuna!  :)");
//   } else {
//     return console.log("Sven came up empty-handed.  :(");
//   }

// } 
//======================================================

//Algorithmic thinking pracice

//Higher Order functions are functions that accept a function as a parameter 
//to use for their own porpose:

// 1 Defining chores////////////////////////////////

// define 6 function that takes 1 paramater which is an object that reflects a 
// firstName, and LastName
  //if the object represents "donald" "McLelland"
    //display "Donald McLelland went to the grocery store"
    // or "Donald McLelland got the engine oil changed"

/// 2 lazy Day////////////////////////////////


// define a function that accepts 3 parameters 
// param 1. chore param2. person param 3. day param

//return value should be a string that represents the ${person} did ${chore} on ${day}

// 3 busy day////////////////////////////////

// higher order functio should accept 5 params.
// first should be 3 f(x) followed by a person object then a string for the day 
// inside of this function invoke the 3 functions 
//last format the return value of the function to read the format provided in the chapter