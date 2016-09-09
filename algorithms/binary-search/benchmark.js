const binarySearch = require('./');

module.exports = function benchmark() {
  const orderedArray = [];
  let i = 0;
  for (; i < 10000; i++) {
    orderedArray[i] = i;
  }

  // Standard indexOf
  let startTime = process.hrtime();
  console.log('indexOf', orderedArray.indexOf(1234));
  console.log('indexOf duration ([s, ns])', process.hrtime(startTime));

  // binarySearch
  startTime = process.hrtime();
  console.log('binarySearch', binarySearch(orderedArray, 1234));
  console.log('binarySearch duration ([s, ns])', process.hrtime(startTime));
}
