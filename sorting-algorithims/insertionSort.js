/**
 * Start at 0 --- everything left of 0 is sorted
 * Get second number
 * Insert it into the sorted array in order
 * ex
 * 10
 * 5, 10
 * 3, 5, 10
 * 3, 5, 8, 10
 * 2, 3, 5, 8, 10
 * 2, 3, 5, 6, 8, 10
 * 2, 3, 4, 5, 6, 8, 10
 * 2, 3, 4, 5, 6, 7, 8, 10
 * 2, 3, 4, 5, 6, 7, 8, 9, 10
 * 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
 */

const insertionSort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] < nums[j]) {
        // Remove item
        const spliced = nums.splice(i, 1)
        // Insert it in at the correct spot
        nums.splice(j, 0, spliced[0])
      }
    }
  }
  return nums
}

// Test cases
console.log(insertionSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]))
