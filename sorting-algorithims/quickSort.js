/**
 * Start with a list
 * Pick a pivot point (ex last item in list)
 * Push items less than into a 'left' array
 * Push itmes greater than into a 'right' array
 * Recursively call quickSort on both arrays until length is <=1
 * Concat left, pivot, right and return
 */

function quickSort(nums) {
  if (nums.length < 2) {
    return nums
  }
  const pivot = nums.pop()
  const less = []
  const greater = []

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i]
    if (current <= pivot) {
      less.push(current)
    } else {
      greater.push(current)
    }
  }

  return quickSort(less).concat(pivot, quickSort(greater))
}

// Test case
console.log(quickSort([10, 8, 2, 1, 6, 3, 9, 4, 7, 5]))
