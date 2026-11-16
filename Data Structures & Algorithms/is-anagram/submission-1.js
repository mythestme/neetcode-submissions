class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length){
            return false
        }
        const tSorted = t.split("").sort((a,b)=>a.localeCompare(b))
        const sSorted = s.split("").sort((a,b)=>a.localeCompare(b))
        
        for (let i = 0; i<sSorted.length; i++){
            if(tSorted[i] !== sSorted[i] ){
                return false
            }
        }
        return true
    }
}
