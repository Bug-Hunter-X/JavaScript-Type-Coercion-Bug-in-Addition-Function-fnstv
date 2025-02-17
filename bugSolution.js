function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Invalid input: Both parameters must be numbers";
  }
  if (a === null || b === null) {
    return null;
  }
  return a + b; 
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // Invalid input: Both parameters must be numbers
console.log(foo(1, null)); // Invalid input: Both parameters must be numbers
console.log(foo(null, null)); // Invalid input: Both parameters must be numbers
console.log(foo(0,2)); //2
console.log(foo(2,0)); //2