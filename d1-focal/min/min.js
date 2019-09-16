/* I should actually compare each element and get the smallest of them in a variable without setting a new array in the right order*/

const min = function(array) {
  let smallest = array[0]
  for(i = 1; i < array.length; i++) {
    if(array[i] < array[0]) {
      smallest = array[i];
    }
  }
  return smallest;
}

/*
const minimumSmartAss = function(array) {
  array.sort(function(a, b) {
    return a-b;
  });
  return array[0];
};
*/

/*
 * This is some test runner code that's simply calling our min function defined
 * above to verify it's returning the proper minimum. Do not modify it!
 */
const flightPrices = [1260, 490, 599, 1400, 820];
console.log(`The cheapest flight amongst $1260, $490, $599, $1400 and $820 costs \$${min(flightPrices)}`);

const golfScores = [-1, 3, 0, -4, 1, 4, -2];
console.log(`The winning golf score amongst -1, 3, 0, -4, 1, 4 and -2 is ${min(golfScores)}`);

const pageNumbers = [232];
console.log(`The shortest book out of a list of single book with 232 pages has ${min(pageNumbers)} pages`);

const temperatures = [45, 10, -20, 0, 3, -20];
console.log(`The coldest temperature amongst 45C, 10C, -20C, 0C, 3C and -20C is ${min(temperatures)}C`);