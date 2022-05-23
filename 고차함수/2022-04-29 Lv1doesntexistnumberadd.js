function solution(numbers) {
  return 45 - numbers.reduce((acc, cur, idx) => {
      return acc + cur        
  })
}

console.log(solution([5,8,4,0,6,7,9]))