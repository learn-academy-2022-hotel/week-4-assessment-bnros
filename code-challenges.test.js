// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// PSEUDOCODE-
// input: an array
// output: a new array that removes the first value, and with remaining values shuffled

// process:
// start with creating a function "colorShuffle"
// after creating function, pass it the parameter of "array"
// use the .shift() to remove the first value in array
// following the removal of the first value, use the fisher-yates method to shuffle remaining values

// references/sources:
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// RED:
describe("colorShuffle", () => {
  const colors1 = ["purple", "blue", "green", "yellow", "pink"]
  const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]

  it("shuffle contents and remove first value", () => {
    expect(colorShuffle(colors1)).toEqual(expect.arrayContaining(["blue", "green", "yellow", "pink"]))
    expect(colorShuffle(colors2)).toEqual(expect.arrayContaining(["indigo", "periwinkle", "ochre", "aquamarine", "saffron"]))

  })
})

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.

// GREEN:
const colorShuffle = (array) => {
  array.shift()
  // for (let i = array.length - 1; i > 0; i--) {
  //   const k = Math.floor(Math.random() * (i + 1))
  //   [array[i], array[j]] = [array[j], array[i]]
  // }
  // return array

  // ^new, updated ES6 synax of Fisher-Yates method that I originally tried to use, but I could not get it to work. ended using the code below

    let currentIndex = array.length, randomIndex
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  return array
}

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// PSEUDOCODE-
// input: an object containing votes
// output: a number containing total tallied votes

// process:
// start with creating a function called "totalTally"
// pass it the parameter of object
// assign a variable called "total" and set it to 0
// have the "total" access the object using .upVote and .downVote, and then subtracing from each other to get a total tallied vote
// return "total"

// a) Create a test with expect statements for each of the variables provided.

// RED:
describe("totalTallied", () => {
  it("takes in an object and return total number of tallied votes", () => {
    expect(totalTallied(votes1)).toEqual(11)
    expect(totalTallied(votes2)).toEqual(-31)
  })
})

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// b) Create the function that makes the test pass.

// GREEN
const totalTallied = (object) => {
  let total = 0
  total = object.upVotes - object.downVotes
  return total
}

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// PSEUDOCODE-
// input: two arrays
// output: new, single array with no duplicate values

// process:
// start with creating a function called "noDupes"
// pass it two parameters, one each to account for the arrays being passed through. to keep things easier for clarification, I used "array1" and "array2"
// create a variable named combinedArray within our function to use the .concat method with our parameters to create a new array that combines the values of both arrays
// return using the array.from() method and the "set" object to remove the duplicate values -- set allows you to store unique values of the combined array ONCE, and then array.from() allows you to change that set back to a single array

// references/sources:
// https://www.w3schools.com/jsref/jsref_from.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#:~:text=Set%20objects%20are%20collections%20of,a%20set%20in%20insertion%20order.

// a) Create a test with an expect statement using the variables provided.

//RED:
describe("noDupes", () => {
  const dataArray1 = ["array", "object", "number", "string", "Boolean"]
  const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
  it("takes in arrays and returns a single array with no duplicate values", () => {
    expect(noDupes(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// b) Create the function that makes the test pass.

// GREEN:
const noDupes = (array1, array2) => {
  const combinedArray = array1.concat(array2);
  return Array.from(new Set(combinedArray));
}