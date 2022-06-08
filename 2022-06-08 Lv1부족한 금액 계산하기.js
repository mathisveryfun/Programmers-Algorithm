// 12:07 시작

// 와 가우스 공식을 쓸 수도 있었네..

function solution(price, money, count) {
  const tmp = price * count * (count + 1) / 2 - money;
  return tmp > 0 ? tmp : 0;
}
console.log(solution(3, 20, 4))