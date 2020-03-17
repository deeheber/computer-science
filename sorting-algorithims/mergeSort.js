/**
 * Take a big list and divide it into two lists
 * Each sublist continues to do this recursively until you have lists of 1 item
 * Merge (stitch) sorted lists together via another merge function that walks  up both lists simultaneously
 *
 * Most useful stable and is O n log n
 */

function merge (left, right) {
  const results = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  return results.concat(left, right);
}

function mergeSort (nums) {
  if (nums.length < 2) {
    console.log('finishing ', nums);
    return nums;
  } else {
    const length = nums.length;
    const middle = Math.floor(length / 2);
    const left = nums.slice(0, middle);
    const right = nums.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
  }
}

// test cases
console.log(mergeSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]));
