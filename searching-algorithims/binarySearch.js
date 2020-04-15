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
