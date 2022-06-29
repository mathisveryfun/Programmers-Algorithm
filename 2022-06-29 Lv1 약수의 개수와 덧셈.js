function solution(left, right) {
  // result 수를 0으로 선언 할당한다.
  let result = 0;
  // 약수의 개수가 홀수이면 odd 짝수이면 even을 리턴하는 함수를 만든다.
  let divisorCount = (num) => {
    let count = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        count++;
      }
    }
    if (count % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  };
  // console.log(divisorCount(9)) 작동확인

  // left 수부터 right 수까지 1씩 늘려가며 약수의 개수를 구하는 함수를 거치게하고
  // 약수의 개수가 짝수면 result에 더하고 홀수면 뺸다.
  for (let i = left; i <= right; i++) {
    if (divisorCount(i) === "even") {
      result += i;
    } else {
      result -= i;
    }
  }

  // result를 리턴한다.
  return result;
}

console.log(solution(24, 27));
