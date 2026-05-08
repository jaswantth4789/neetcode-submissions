class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxwater = 0;
        let l = 0;
        let r = heights.length - 1;

        while( l < r ){
            let width = r - l;
            let height = Math.min(heights[l],heights[r]);
            let area = width * height;
            maxwater = Math.max(maxwater,area);

            if(heights[l]>=heights[r]){
                r--;
            }
            else {
                l++;
            }
        }
        return maxwater; 
    }
}
