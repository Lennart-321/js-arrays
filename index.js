const numbers = [2, 6, 12, 7, 22, 35];

// 1. Create a variable where you store the first element of the numbers array. Log it to the console.
let number1 = numbers[0];
console.log(number1);

// 2. Create a variable where you store the last element of the numbers array. Log it to the console.
let number2 = numbers.at(-1);
console.log(number2);

// 3. Create a variable where you store the fourth element of the `numbers` array. Log it to the console.
let number3 = numbers[3];
console.log(number3);

// 4. Store the second and the fifth element of the numbers array in variables. Create a new array and populate it with those two variables. Log it to the console.
let number4_2 = numbers[1];
let number4_5 = numbers[4];
let array4 = [number4_2, number4_5];
console.log(array4);

// 5. What is the length of the `numbers` array? Use the correct array property to save that number to a variable and log it to the console.
let length5 = numbers.length;
console.log(length5);

// 6. Add an arbitrary number to the end of the `numbers` array with the correct array method. This array method returns a value. Save that to a variable and log it to the console. What does this number represent?
let newLength6 = numbers.push(117);
console.log(newLength6);

// 7. Add an arbitrary number to the start of the `numbers` array using the correct array method. This method also returns a value. Log it to the console and reflect on what this value means.
let newLength7 = numbers.unshift(5);
console.log(newLength7);

// 8. By now the `numbers` array should have been modified a couple of times. Let's shrink it again. Remove the last element from the array with an array method. This method should return a value as well. Log it to the console as see what it is.
let removedValue8 = numbers.pop();
console.log(removedValue8);

// 9. Do the same as the last one, but remove it from the beginning instead. Log the return value to the console.
let removedValue9 = numbers.shift();
console.log(removedValue9);

// 10. If we have done the last couple of exercises correctly, we should have the same content as the default array. Log it out the console and see for yourself.
console.log(numbers);
