# JavaScript Type Coercion Bug

This repository demonstrates a subtle bug in a JavaScript function that performs addition. The bug arises from JavaScript's loose type system and its behavior with type coercion. 

## Bug Description

The `foo` function adds two numbers. It correctly handles `null` values by returning `null`. However, it fails to explicitly handle numeric type checking.  When one or both of the inputs are 0, the function will still add them as numbers. This can lead to unexpected behavior, especially when the function expects only non-zero numbers.

## Bug Solution

The solution provides explicit numeric type checking using `typeof` to prevent implicit type coercion and ensures that only numbers are processed within the addition operation.  The improved function rejects values that aren't numbers, adding more robust error handling.

## How to reproduce

1. Clone this repository.
2. Run `bug.js` and `bugSolution.js` in a JavaScript environment (browser console, Node.js etc.)