// prompt("Math")
var Math = parseInt(prompt("Math"))
console.log ("Math Marks", Math)

var English = parseInt(prompt("English"))
console.log ("English Marks", English)

var Urdu = parseInt(prompt("Urdu"))
console.log ("Urdu Marks", Urdu)

var Science = parseInt(prompt("Science"))
console.log ("Science Marks", Science)

var Computer = parseInt(prompt("Computer"))
console.log ("Computer Marks", Computer)

var obtainMarks = Math + English + Urdu + Science + Computer
console.log(obtainMarks)

var totalMarks = 500

var Percentage = (obtainMarks / totalMarks) * 100

console.log ("totalMarks", totalMarks)

// console.log(Percentage)

alert("Student Obtain Marks: "+obtainMarks)
alert("percentage: "+Percentage+ "%")

console.log ("percentage: "+Percentage+ "%")