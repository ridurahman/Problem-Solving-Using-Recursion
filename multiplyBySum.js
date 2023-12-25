function multiplyBySum(a,b){
    if(a==0 || b==0){
        return 0;
    }
    return a + multiplyBySum(a,b-1);
}

console.log(multiplyBySum(4,5));
console.log(multiplyBySum(3,3));
console.log(multiplyBySum(0,2));

// Time Complexity: O(n) where n is equal to b
// Space Complexity: O(n) where n is equal to b