class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b)=> a-b);
        let i=0;
        let l =0;
        let r =0;
        let result = [];
        for(i=0;i<nums.length;i++){
            if(i>0 && nums[i]===nums[i-1]) continue;
            l=i+1;
            r=nums.length-1;
            console.log("l,r",l,r);
            while(l<r){
            let sum = nums[i]+nums[l]+nums[r];
            if(sum>0){
                r--;
            }
            else if(sum<0){
                l++;
            }
            else if(sum === 0){
                result.push([nums[i],nums[l],nums[r]]);
                l++;
                while (nums[l] === nums[l - 1] && l < r) {
        l++;
    }
            }
            }
        }
        return result;
    }
}
