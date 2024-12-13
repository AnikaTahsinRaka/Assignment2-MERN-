
//1
function calculateDifference(a, b) {
    return a - b;
  }
const result = calculateDifference(10, 5);
console.log("Difference: " + result); 


//2
function isOdd(num) {
  return num % 2 !== 0;
}
console.log(isOdd(3));   
console.log(isOdd(0));  
console.log(isOdd(-5));


//3
function findMin(arr) {
  if (arr.length === 0) {
    return undefined;  
  }
  return Math.min(...arr); 
}
console.log(findMin([3, 5, 1, 9, 2])); 


//4
function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0); 
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); 


//5
function sortArrayDescending(arr) {
  return arr.slice().sort((a, b) => b - a);  
}
console.log(sortArrayDescending([1, 3, 2, 5, 4, 2]));


//6
function lowercaseFirstLetter(str) {
  if (str.length === 0) {
    return str; 
  }
  return str.charAt(0).toLowerCase() + str.slice(1);  
}
console.log(lowercaseFirstLetter("JavaScript"))


//7
function findAverage(arr) {
  if (arr.length === 0) {
    return 0;  
  }
  const sum = arr.reduce((acc, num) => acc + num, 0);  
  return sum / arr.length; 
}
console.log(findAverage([1, 2, 3, 4, 5])); 

//8
function isLeapYear(year) {
  return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
}
console.log(isLeapYear(2024));  
console.log(isLeapYear(1900));