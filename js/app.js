function mergeDataStreams(stream1, stream2) {
  var merged = [];
  // copy stream1 to merged
  stream1.forEach(function(element) {
    merged.push(element);
  });
  return merged;
}

function mergeDataStreamsMap(stream1, stream2) {
  return stream1.map(function(element) {
    return element;
  });
}

function mergeDataStreamsSlice(stream1, stream2) {
  return stream1.slice();
}

var testData = [
  { id: 1, firstName: 'Michael', lastName: 'Herman', age: 33 },
  { id: 3, firstName: 'Jeremy', lastName: 'Johnson', age: 25 }
];
console.log(mergeDataStreams(testData));
console.log(mergeDataStreamsMap(testData));
console.log(mergeDataStreamsSlice(testData));