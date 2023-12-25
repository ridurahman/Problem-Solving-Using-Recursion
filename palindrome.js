function isPalindrome(s){
    let i = 0;
    let j = s.length - 1;

    return checkPalindrome(s,i,j);
}

function checkPalindrome(s,x,y){
    if(x==y){
        return true;
    }
    if(x>y){
        return true;
    }
    if(s[x] != s[y]){
        return false;
    }
    return checkPalindrome(s,x+1, y-1);

}

console.log(isPalindrome("madam"));
console.log(isPalindrome("adam"));
console.log(isPalindrome("tenet"));

// Time Complexity: O(n/2) = O(n) where n is the length of the string
// Space Complexity: O(n/2) O(n) as n/2 call stack is needed for recursion