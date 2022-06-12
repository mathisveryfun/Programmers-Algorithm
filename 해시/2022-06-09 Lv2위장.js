function solution(clothes) {
  let answer = 1;

  let table = clothes.reduce((acc, cur) => {
    acc[cur[1]] = acc[cur[1]] ? acc[cur[1]] + 1 : 1;
    return acc;
  }, {});

  for (var key in table) {
    answer *= table[key] + 1;
  }

  return answer - 1;
}
console.log(solution([["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]))