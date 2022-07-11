function solution(n, times) {
  // result를 0으로 선언한다.
  // 우선 times를 가장 짧은 순으로 다시 재 배열한다. => [7, 10]
  // times가 빈방인지 아닌지를 구별할 isFull 배열이 필요하다. => [false, false]
  // n이 0이 될떄 까지 무언가를 반복한다.
  // isFull배열을 순환하면서 만약 원소값이 false이면은
  // n을 하나 줄이고, 그자리를 true로 바꾸고,
  //그 true로 바꾼 원소의 인덱스를 찾아 times에서 값을 찾고 그것을 result에  더함
  // result를 리턴한다.

  let result = 0;
  times = times.sort((a, b) => a - b);

  let isFull = new Array(times.length).fill(0);

  while (n > 0) {
    isFull = isFull.map((el, idx, arr) => {
      if (el === 0) {
        n = n - 1;
        return times[idx];
      } else {
        return el;
      }
    });
    result = result + 1;
    isFull = isFull.map((el) => {
      return el - 1;
    });
  }
  return result
}
console.log(solution(6, [7, 10]));
