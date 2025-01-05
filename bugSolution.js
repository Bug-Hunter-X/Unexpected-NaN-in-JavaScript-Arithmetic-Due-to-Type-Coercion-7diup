function foo(a, b) {
  a = parseInt(a, 10);
  b = parseInt(b, 10);
  if (isNaN(a) || isNaN(b)) {
    return 0; // Handle cases where conversion fails
  }
  return a + b;
}

function bar(c, d) {
  return foo(c, d) * 2;
}

console.log(bar(2, 3)); // Output: 10
console.log(bar("2", 3)); // Output: 10
console.log(bar("abc",3)); // Output: 0