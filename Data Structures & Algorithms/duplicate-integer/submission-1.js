class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const uniques = new Map()
        for (const num of nums){
            if(uniques[num]){
                return true
            }
            uniques[num] = true
        }
        return false
    }
}
