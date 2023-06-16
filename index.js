console.log('/*----------Call back-----------*/');
function test(arr, callback) {
  arr.push(10);
  callback();
}

let arr = [1, 2];
test(arr, callback);

function callback() {
  console.log(arr);
}

console.log('/*----------Reverse Each Word In A String----------*/');
function reverseString(string) {
  let splitString = string.split(' ');
  splitString = splitString.map((x) => (x = x.split('').reverse().join('')));
  return splitString.join(' ');
}

console.log('Welcome Home -- ', reverseString('Welcome Home'));

console.log('/*----------Check if an object is array or not---------*/');
function checkIfArray(input) {
  // Method 1 :: Array isArray Method
  return Array.isArray(input);
  // Method 2 :: Object.prototype.toString.call
  return Object.prototype.toString.call(input) === '[object Array]';
}

console.log(checkIfArray([1, 2, 3]));
console.log(checkIfArray([]));
console.log(checkIfArray(null));
console.log(checkIfArray(Object));

console.log('/*---------Check if input is an integer----------*/');
function checkIfInt(input) {
  return input % 1 === 0;
}

console.log('Check if int -->', checkIfInt(null)); // Exceptional behavioir - returns true
console.log('Check if int -->', checkIfInt(undefined));
console.log('Check if int -->', checkIfInt(1));
console.log('Check if int -->', checkIfInt('Hello'));

console.log('**************Type Of**************');
function getTypeOf(input) {
  return Object.prototype.toString.call(input) + ' --> ' + typeof input;
}

console.log('null -->', getTypeOf(null)); // Exceptional behavioir - returns true
console.log('Undefined -->', getTypeOf(undefined));
console.log('number -->', getTypeOf(1));
console.log('decimal -->', getTypeOf(1.1));
console.log('string -->', getTypeOf('Hello'));
console.log('object -->', getTypeOf({ test: 'Hello' }));
console.log('array -->', getTypeOf([1]));

console.log('/*---------Increment a variable using closure-----------*/');
function counter(num) {
  let currentVal = num;
  let increment = function (step) {
    currentVal = currentVal + step;
    console.log(currentVal);
  };
  return increment;
}

let incrementCounter = counter(24);
incrementCounter(1); // 24 + 1 --> 25
incrementCounter(1); // 25 + 1 --> 26

console.log('/*----------mul(2)(3)(4) --> 24----------*/');
function mul(num1) {
  return function (num2) {
    return function (num3) {
      return num1 * num2 * num3;
    };
  };
}

console.log(mul(2)(3)(4));

console.log('/*----------Fizz Buzz Challenge---------*/');
function sayIt(num) {
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  else if (num % 3 === 0) return 'fizz';
  else if (num % 5 === 0) return 'buzz';
  return '';
}
console.log(sayIt(15));

console.log('/*----------Anagram Check---------*/');
function isAnagram(str1, str2) {
  return (
    str1.toLowerCase().split('').sort().join('') ===
    str2.toLowerCase().split('').sort().join('')
  );
}

console.log(isAnagram('Mary', 'Ramy'));
