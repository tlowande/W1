// TEST CODE
// These should all pass assertion, but they don't. 
// Assertion Function
const assertEqual = function(actual, expected, message) {
  if (actual === expected) { 
    console.log(`✅✅✅ Assertion Passed`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed`);
  }
}

// FUNCTION IMPLEMENTATION (BUGGY)
const isPalindrome = function (str) {
  const noSpaces = str.split(" ").join("");
  const midIndex = Math.floor(noSpaces.length / 2);
  const lastIndex = noSpaces.length - 1;
  for (let i = 0; i < midIndex; i++) {
    if (noSpaces[i] !== noSpaces[lastIndex - i]) {
      return false;
    }
  }
  return true;
}

// TEST CODE
// These should all pass assertion, but they don't. 
assertEqual(isPalindrome('p'), true);
assertEqual(isPalindrome('foo'), false);
assertEqual(isPalindrome('racecar'), true);
assertEqual(isPalindrome('race car'), true);
assertEqual(isPalindrome('racecer'), false);
assertEqual(isPalindrome('live without evil'), false);
assertEqual(isPalindrome('just some random words'), false);

// Bonus / Stretch: Uncomment these tests and figure out why these are also failing
// assertEqual(isPalindrome('Kayak'), true);
// assertEqual(isPalindrome('a santa at NASA'), true);


// Bonus / Stretch: Uncomment these tests and figure out why these are also failing
// assertEqual(isPalindrome('Kayak'), true);
// assertEqual(isPalindrome('a santa at NASA'), true);
