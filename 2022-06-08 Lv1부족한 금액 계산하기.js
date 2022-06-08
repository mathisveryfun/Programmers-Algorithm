// 12:07 시작

function solution(price, money, count) {
  // 필요한 금액 requireMoney 변수를 선언하고 0으로 할당한다.
  let requireMoney = 0;

  // price, count를 이용해 requireMoney를 계산한다. 
  for (let i = 1; i <= count; i++) {
    requireMoney += price * i;    
  }

  // requireMoney - money 를 리턴한다.
  return Math.max(requireMoney - money, 0)
}
console.log(solution(3, 20, 4))