class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = new Map();
        for(let num of nums) {
            freqMap.set(num,(freqMap.get(num) || 0) + 1);
        }
        const result = Array.from(freqMap.keys());
        result.sort((a,b)=> { return freqMap.get(b) - freqMap.get(a)})
        return result.slice(0,k);
    }
}
