class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        nums.sort()
        var len = nums.length
        for(var i=0;i<len;i++){
            for(var j=i+1;j<len;j++){
                if(nums[i]===nums[j]){
                    return true
                }

            }
            
        }
        return false
    }
}