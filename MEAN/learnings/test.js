console.log("I am running from node")

console.log("TYPES")
console.log("-----------")
console.log(a);
var a = "weird";

console.log(typeof(b));
var b = "weird too";
console.log(typeof(b));
console.log("-----------")

console.log("ARRAYS")
console.log("-----------")
var empty_array = [];
var string_array = ["hi","these","are","strings"];

var x = 15;
console.log("Logging variables to the console", empty_array, string_array, x);

console.log("2nd value of string_array", string_array[1]);

console.log("string_array has a length of ", string_array.length);

var arr = [3,6];
arr[234]= "hi"

console.log(arr.length)
console.log(arr[34])
arr.length=3;
console.log(arr[34])
console.log(arr[234])

console.log(arr.length)

arr.length=500;

console.log(arr[234])
console.log(arr.length)
console.log("-----------")
