class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        for (let i = 0; i<nums.length; i++){
            const checkInt = target - nums[i]
            if (nums.includes(checkInt)){
                if(checkInt === nums[i]){
                    if(nums.indexOf(checkInt) !== nums.lastIndexOf(checkInt)){

                        return [nums.indexOf(checkInt), nums.lastIndexOf(checkInt)]
                    }else{
                        continue
                    }
                }
                return [nums.indexOf(nums[i]), nums.indexOf(checkInt)]
            }
        }

        return null
    }
}
