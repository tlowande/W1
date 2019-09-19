// The second argument/parameter is expected to be a (callback) function
const findWaldo = function (names, found) {
  names.forEach(function (element, i) {
    let name = names[i];
    if (name === "Waldo") {
      found(i);   // execute callback
    }
  })
}


findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(i) {
  console.log(`Found Waldo at index ${i}!`);
});