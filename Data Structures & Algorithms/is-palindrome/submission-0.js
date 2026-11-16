class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNumeric(char){
        return ((char>="a" && char<="z") || (char >= "A" && char <= "Z") || (char >= "0" && char <= "9"))
    }

    isPalindrome(s) {
        const arr = s.split('').reduce((acc,item,_)=> {
            if(this.isAlphaNumeric(item)) acc.push(item.toLowerCase())
            return acc
        },[])

        let i = 0
        let j= arr.length - 1
        while ( i<j){
            if(arr[i] !== arr[j]) return false

            i++
            j--
        }
        return true
    }
}
