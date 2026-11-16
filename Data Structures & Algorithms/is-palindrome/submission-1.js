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
        const input = arr.join('')
        const reverse = arr.reverse().join('')

        return input === reverse
    }
}
