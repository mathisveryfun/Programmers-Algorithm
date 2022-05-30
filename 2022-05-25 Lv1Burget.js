function solution(d, budget) {
  let count = 0;
  let sum = 0;
  
  const sortD = d.sort((a, b) => a - b);
  for (let i = 0; i < sortD.length; i++) {
      count++;
      sum += sortD[i]
      
      if (sum > budget) {
          return count - 1
      }
  }
  return count
  
}

// 왜 이렇게 어렵게 생각했을까... 슈벌..
