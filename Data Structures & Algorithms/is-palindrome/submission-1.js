class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const string = s.toLowerCase().replace(/[^a-z0-9]/g, "").split(' ').join('');
        console.log("str",string);
        for(let i =0; i<Math.floor(string.length/2+1);i++){
            if(string[i] !== string[string.length-1-i]){
                console.log("i",i)
                return false;
            }
        }


        return true;
    }
}
