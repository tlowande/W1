const assertEqual = require('../assertEqual')
const tail = require('../tail')


const result = tail(["Lighthouse", "Labs"]); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs");

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const empty = [];
tail(empty); // no need to capture the return value since we are not checking it
assertEqual(empty.length, 3); // original array should still have 3 elements!