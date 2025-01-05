# JavaScript Type Coercion Bug

This repository demonstrates a common JavaScript bug related to type coercion in arithmetic operations.  The `bar` function, when passed a string and a number, unexpectedly returns `NaN` instead of performing the expected calculation. This is because JavaScript attempts to convert the string to a number before performing addition, but fails when the string cannot be converted.  The solution addresses this issue by explicitly type-checking inputs and converting strings to numbers in a controlled manner.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js`.
3. Run the script using a Node.js interpreter or in a web browser's console.
4. Observe the unexpected output of `NaN`. 

## Solution

The `bugSolution.js` file provides a corrected version of the code that handles potential string inputs and converts them to numbers using `parseInt` before performing arithmetic operations.
