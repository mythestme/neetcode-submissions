class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false

        const count = new Map()
        
        for (let item of s){
            count[item] = (count[item] || 0) + 1
        }
        
        for (let item of t){
            if(!count[item]) return false
            count[item] --
        }
        return true
    }
}
