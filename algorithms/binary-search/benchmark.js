const binarySearch = require('./');

module.exports = function benchmark() {
  const orderedArray = [];
  let i = 0;
  for (; i < 10000; i++) {
    orderedArray[i] = i;
  }

  // Standard indexOf
  let startTime = Date.now();
  console.log('indexOf', orderedArray.indexOf(1234));
  console.log('indexOf duration (ms)', Date.now() - startTime);

  // binarySearch
  startTime = Date.now();
  console.log('binarySearch', binarySearch(orderedArray, 1234));
  console.log('binarySearch duration (ms)', Date.now() - startTime);
}
