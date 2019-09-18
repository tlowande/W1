const isPalindrome = function (str) {
  const noSpaces = str.split(" ").join("");
  const midIndex = Math.floor(noSpaces.length / 2);
  const lastIndex = noSpaces.length - 1;
  for (let i = 0; i < midIndex; i++) {
    if (str[i] !== str[lastIndex - i]) {
      return false;
    }
  }
  return true;
}

isPalindrome('race car')

/* first the function removes the spaces of any string by splitting where there's a space then joining everything with no space; = string

midIndex locate the middle by counting how many letters the string has and divide it in half getting the lowest number = 3

then it adds the lastIndex number of the string to a variable = string.length-1 is 6 for this example

then iterates over each letter and check if its first letter is different from last letter. If this evaluation comes to tru(letters are different) then the function should return false for the palindrome IT'S NOT A PALINDROME
*/