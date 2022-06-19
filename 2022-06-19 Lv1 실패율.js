// 19:17 시작  19:58 1차 제출

function solution(N, stages) {
  // stages 중 가장 많은 숫자순으로 리턴?
  // 1번 스테이지의 실패율은 어떻게 구할까?
  // 1번 스테이지 실패 수 / 1번 스테이지 도전 수
  // 1번 스테이지 실패 수는 어떻게 구할까? stages 배열 중 1의 개수
  // 1번 스테이지 도전 수는 어떻게 구할까? stages 배열 중 1이상의 개수

  // k번 스테이지 실패 수를 fail이라 선언, k번 스테이지 도전 수를 challenge라 선언
  let fail = 0;
  let challenge = 0;
  let result = [];
  let result2 = [];

  stages = stages.sort((a, b) => a - b);
  // console.log(stages);

  for (let i = 1; i <= N; i++) {
    // challenge의 개수는 stages의 배열 중 i이상의 개수를 filter 한다.
    challenge = stages.filter((el) => {
      return el >= i;
    }).length;
    // console.log(challenge);
    // fail의 개수는 stages의 배열 중 i의 개수를 filter 한다.
    fail = stages.filter((el) => {
      return el === i;
    }).length;
    // console.log(fail)
    // result에 푸쉬 한다.
    result.push(fail / challenge);
  }
  console.log(result);

  let k = 0;
  while (k < result.length) {
    let max = result[0];
    let maxIdx = 0;
    for (let j = 0; j < result.length; j++) {
      if (result[j] > max) {
        max = result[j];
        maxIdx = j;
      }
    }
    // console.log(maxIdx)
    result[maxIdx] = -1;
    result2.push(maxIdx + 1);
    k += 1;
    // console.log(result)
  }
  console.log(result2);
  return result2;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
