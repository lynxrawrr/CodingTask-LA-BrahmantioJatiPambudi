/**
 * Diberikan array nums dan target integer,
 * kembalikan indeks dari dua angka yang jumlahnya sama dengan target.
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];

    if (seen.has(need)) {
      return [seen.get(need), i];
    }

    seen.set(nums[i], i);
  }

  return [];
}

// --- Test Case ---
function runTests() {
  console.log("Running tests...");

  // Test 1
  console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]

  // Test 2
  console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]

  // Test 3
  console.log(twoSum([3, 3], 6)); // Expected: [0, 1]

  // Test 4
  console.log(twoSum([-1, 0, 1, 2], 1)); // Expected: [2, 3] atau [0, 3]

  // Test 5
  console.log(twoSum([0, 4, 3, 0], 0)); // Expected: [0, 3]
}

// Jalankan test
runTests();
