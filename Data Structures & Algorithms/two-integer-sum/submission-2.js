class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()

        for (let i = 0; i<nums.length; i++){
            const checkInt = target - nums[i]

            if(map.has(checkInt)){
                return[i,map.get(checkInt)]
            }
            map.set(nums[i],i)
            
        }

        return null
    }
}
