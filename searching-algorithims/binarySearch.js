function binarySearch (target, nums) {
  let floorIndex = -1;
  let ceilingIndex = nums.length;

  while (floorIndex + 1 < ceilingIndex) {
    const distance = ceilingIndex - floorIndex;
    const halfDistance = Math.floor(distance / 2);
    const guessIndex = floorIndex + halfDistance;
    const guessValue = nums[guessIndex];

    if (target === guessValue) {
      return true;
    }

    if (guessValue > target) {
      ceilingIndex = guessIndex;
    } else {
      floorIndex = guessIndex;
    }
  }
  return false;
}

// The nums array must be sorted already
console.log(binarySearch(55, [8, 9, 10, 11, 12, 13])); // false
console.log(binarySearch(5, [5, 6, 7, 8, 9])); // true

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
