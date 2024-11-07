//Array methods

//ForEach, map, filter, includes;

//ForEach - Returnerar ingenting
let fruitsAndBerries = ["Blåbär","Mango","Jordgubbar","Äpple","Persika"];

// fruitsAndBerries.forEach( (fruit) => {console.log(fruit)} )

//Map - Returnerar en ny array

let milkshakes = fruitsAndBerries.map((fruit) => {return fruit + "-milkshake"})
// console.log(milkshakes);

//Filter - Returnerar en ny array - Om item uppfyller villkor

let fiveLetterFruits = fruitsAndBerries.filter( (fruit) => {return fruit.length === 5} )
console.log(fiveLetterFruits);

//Includes - Returnerar boolean
console.log(fruitsAndBerries.includes("Mango"))