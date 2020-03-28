/**
 * Two lists
 * List on the left is sorted
 * Loop through list  on the right
 * Find smallest number
 * Swap the smallest number from the list on the right with the
 * current element on tn left list
 */
function selectSort (nums) {
  for (let i = 0; i < nums.length; i++) {
    let min = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[min]) {
        min = j;
      }
    }
    if (min !== i) {
      const temp = nums[min];
      nums[min] = nums[i];
      nums[i] = temp;
    }
  }
  return nums;
}

console.log(selectSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]));
