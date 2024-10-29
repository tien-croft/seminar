// Helper function to measure the time taken for a function to execute
function measurePerformance(fn, iterations) {
  const start = performance.now();
  fn(iterations);
  const end = performance.now();
  return end - start;
}

// Test case with Object
function testObject(iterations) {
  const obj = {};

  // Insertion
  for (let i = 0; i < iterations; i++) {
    obj[`key${i}`] = i;
  }

  // Access
  for (let i = 0; i < iterations; i++) {
    const value = obj[`key${i}`];
  }

  // Deletion
  // for (let i = 0; i < iterations; i++) {
  //   delete obj[`key${i}`];
  // }
}

// Test case with Map
function testMap(iterations) {
  const map = new Map();
  // Insertion
  for (let i = 0; i < iterations; i++) {
    map.set(`key${i}`, i);
  }

  // Access
  for (let i = 0; i < iterations; i++) {
    const value = map.get(`key${i}`);
  }

  // Deletion
  // for (let i = 0; i < iterations; i++) {
  //   map.delete(`key${i}`);
  // }
}

// Number of iterations
const iterations = 1_000_000;

// Measure performance for Object
const objectTime = measurePerformance(testObject, iterations);
console.log(`Object time: ${objectTime.toFixed(2)} ms`);

// Measure performance for Map
const mapTime = measurePerformance(testMap, iterations);
console.log(`Map time: ${mapTime.toFixed(2)} ms`);
