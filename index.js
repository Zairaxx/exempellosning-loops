let numbers = [24,67,83,94,92,2,50,43,77,99,1]

//Uppgift 1
function getEven(arr){

    let evenNumbers = [];

    for(let i=0;i<arr.length;i++){
        if(arr[i] % 2 === 0){
            evenNumbers.push(arr[i])
        }
    }

    return evenNumbers
}

console.log(getEven(numbers));


let smallNumbers = [1,2,3,4];

//Uppgift 2 
function multiply(arr){
    let product = 1;
    
    for(let i=0;i<arr.length;i++){
        product = product * arr[i]
    }
    
    return product
}

console.log(multiply(smallNumbers));

//Uppgift 3

let berries = ["Jordgubbar","Tranbär","Lingon","Blåbär"]

function hasStrawberries(arr){
    for(let i=0;i<arr.length;i++){

        if(arr[i] === "Jordgubbar"){
            return true
        }
    } //slutet på loop

    return false
} //slutet på funktion

console.log(hasStrawberries([berries]));

//Uppgift 4

let oddOrEven = (arr) => {

    let odd = 0;
    let even = 0;

    for(let i=0;i<arr.length;i++){

        if(arr[i] % 2 === 0){
            even++;
        } else {
            odd++;
        }

    } //slutet på loopen

    if (odd > even){
        return 'Odd array'
    } else if (even > odd){
        return 'Even array'
    } else {
        return 'Balanced Array'
    }
    
}

//Uppgift 5

let names = ["Harry","Gerald","Bartholomeo", "Leobold","Leo"]

let getLongNames = (arr) => {
    let longNames = [];

    for(let i=0;i<arr.length;i++){

        if(arr[i].length > 6){
            longNames.push(arr[i]);
        }
    }

    return longNames

}

let newArray = getLongNames(names);

console.log(newArray);