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
      ceilingIndex = guessValue;
    } else {
      floorIndex = guessValue;
    }
  }
  return false;
}

// The nums array must be sorted already
console.log(binarySearch(1, [1, 2, 3, 4, 5])); // true
console.log(binarySearch(10, [3, 4, 5, 7, 8, 10, 12, 13, 55])); // false
