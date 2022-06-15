function solution(x) {
  // 우선 x를 string으로 변환한다.
  x = String(x);
  // 합을 sum이라 한다.
  let sum = 0;

  // 반복문을 통해 순회하면서 합을 더한다. 그것을

  for (let i = 0; i < x.length; i++) {
    sum += Number(x[i]);
  }

  // x로 나누어 참 거짓을 판단하여 리턴한다.
  if (Number(x) % sum === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(solution(10));
