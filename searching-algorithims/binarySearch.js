function binarySearch (list, item) {
  // Sort in asc order
  list.sort((a, b) => a - b);

  let low = 0;
  let high = list.length;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = list[mid];

    if (guess === item) {
      return true;
    }

    if (guess < item) {
      // item to the right of guess
      low = mid + 1;
    } else {
      // item to the left of guess
      high = mid - 1;
    }
    console.log(low, high);
  }
  return false;
}

// The nums array must be sorted already
console.log(binarySearch([8, 9, 10, 11, 12, 13], 55)); // false
console.log(binarySearch([5, 6, 7, 8, 9], 5)); // true

// Alternate version
// function binarySearch (target, nums) {
//   let floorIndex = 0;
//   let ceilingIndex = nums.length - 1;

//   while (floorIndex + 1 < ceilingIndex) {
//     const middleIndex = floorIndex + Math.floor((ceilingIndex - floorIndex) / 2);
//     const guessValue = nums[middleIndex];

//     console.log('guess is ', guessValue);
//     console.log(floorIndex, middleIndex, ceilingIndex);
//     if (target === nums[0] || target === nums[nums.length - 1] || target === guessValue) {
//       return true;
//     }

//     if (target > guessValue) {
//       // go right
//       floorIndex = middleIndex;
//     } else {
//       // go left
//       ceilingIndex = middleIndex;
//     }
//   }
//   return false;
// }

// console.log(binarySearch(7, [6, 7, 8, 9, 10])); // true
