/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the 
formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 
3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

var markHeight = 1.69; // height in meter
var johnHeight = 1.95;

var markMass = 78; //mass in kg
var johnMass = 92;

var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);

console.log(markBMI, johnBMI)
console.log(markHeight * markHeight, markHeight^2)

// isMarkBMIHigher = markBMI > johnBMI;
// console.log("Is Mark\s BMI higher than John\s?" + ' '+isMarkBMIHigher);


// Using If condition now
if (markBMI > johnBMI) {
    console.log("Mark BMI is higher ")
} else {
    console.log("John BMI is higher ")
}

