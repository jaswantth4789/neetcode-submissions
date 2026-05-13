class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let left = 0;
        let right = left + 1;
        while(right<prices.length){
            if(prices[left]<=prices[right]){
                profit = Math.max(profit,prices[right]-prices[left]);
            }
            else if(prices[right]<= prices[left]){
                left = right;
            }
            right++;
        }
        return profit;
    }
}
