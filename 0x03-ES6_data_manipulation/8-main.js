import cleanSet from "./8-clean_set.js";

console.log(cleanSet(new Set
(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set
(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bin'));
console.log(cleanSet(new Set
(['banjovi', 'bonaparte', 'banappetit', 'banana']), 'ban'));
