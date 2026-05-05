class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

     groupAnagrams(strs) {
    let anamap = new Map(); // Key: sorted string, Value: Array of strings

    for (let str of strs) {
        // 1. Create the unique key
        const key = str.split('').sort().join(''); 

        // 2. If key doesn't exist, initialize with an empty array
        if (!anamap.has(key)) {
            anamap.set(key, []);
        }

        // 3. Push the original string into the correct group
        anamap.get(key).push(str);
    }

    // 4. Return just the groups (the values of our map)
    return Array.from(anamap.values());
}
}
