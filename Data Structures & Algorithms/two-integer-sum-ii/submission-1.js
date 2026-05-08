class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;

        while (left < right) {
            const currentSum = numbers[left] + numbers[right];

            if (currentSum === target) {
                // Return 1-based indices
                return [left + 1, right + 1];
            } else if (currentSum < target) {
                // Sum is too small, move left pointer right
                left++;
            } else {
                // Sum is too large, move right pointer left
                right--;
            }
        }
        
        return [];
    }
}
