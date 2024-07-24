// Creating the array with the given length
let arr = []
let n = prompt("Enter the length of the array:")
for (let index=0; index<n; index++) {
    arr[index] = prompt("Enter the element at index "+index+":");
}

console.log(`Arrays -> ${arr}`)

// Generate an array of range
let arrRange = []
let range = prompt("Enter the Range:")
for (let start=1; start<=range; start++) {
    arr.push(start);
}

console.log("Array for the range ->", arrRange);

// Rotating Array
var Arr = [1, 2, 3, 4, 5]
var rot = 2
console.log("Before Rotating the array", Arr)
for(let i=1; i<=rot; i++) {
  var temp = Arr.pop()
  Arr.unshift(temp)
}
console.log("Rotated array", Arr)

// Difference between two array
let difference = (array1.length>array2.length?array1:array2).filter((item) => !((array1.length>array2.length?array2:array1).includes(item)))
console.log("Result", difference)

// Intersection of Array
let result = (array1.length>array2.length?array1:array2).filter((item) => (array1.length>array2.length?array2:array1).includes(item))
console.log("Result", result)