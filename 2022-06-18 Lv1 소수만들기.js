function solution(nums) {
    let count = 0;
    
    const isPrime = (num) => {
        let q = 2;
        while (q <= Math.sqrt(num)) {
            if (num % q === 0) {
                return false;
            } 
        q += 1;    
        }
        return true;
    }
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (isPrime(nums[i] + nums[j] + nums[k])) {
                    count += 1;
                }                
            }
        }
    }
    return count;
}

console.log(solution([1, 2, 3, 4 ]))
