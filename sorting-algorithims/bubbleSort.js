/**
 * Sort numbers in ascending  order
 * Outer loop checks if something was swapped
 * Inner loop compares two nums at a time
 * ...if  not in order > swap the two numbs
 *
 * Inefficient...don't use in prod
 */

function bubbleSort (nums) {
  let wasSwapped = false;
  do {
    wasSwapped = false;
    for (let i = 0; i <= nums.length - 1; i++) {
      const firstNum = nums[i];
      const secondNum = nums[i + 1];

      if (secondNum < firstNum) {
        nums[i] = secondNum;
        nums[i + 1] = firstNum;
        wasSwapped = true;
      }
    }
  } while (wasSwapped);
  return nums;
}

// Test case
console.log(bubbleSort([8, 6, 7, 5, 3, 0, 9]));
