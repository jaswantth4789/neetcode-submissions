class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        for (let i = 0 ; i < numbers.length ; i++){
            const index = numbers.indexOf(target - numbers[i]);
            if( index != -1 ){
                if(index > i){
                    return [i+1,index+1];
                }
                return [index+1,i+1];
            }
        }
    }
}
