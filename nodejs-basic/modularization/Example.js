import sum from "./defaultModule.js"; // Default import
import { min } from "./namedModule.js"; // Named import
import multiply, { num } from "./mixModule.js"; // Mixed default and named import

console.log(sum(5, 10));
console.log(min(20, 6));
console.log(multiply(5, 55));
console.log(num);