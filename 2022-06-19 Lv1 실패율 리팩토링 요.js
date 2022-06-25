// 19:17 시작  19:58 1차 제출 20:06 분 통과

// 걸린시간 : 1시간

// 시간이 오래 걸린이유: [1, 3, 5, 4, 2]의 배열 중 큰수의 인덱스 부터 다시 나열하는 방식을 생각하는데 오래 걸림

/* 
사용한 전략:
1. filter 함수로 원소를 걸러내기

2. 배열의 원소 중 가장 큰 수의 인덱스를 다시 걸러내기
*/

/* 
느낀점: 우선 코드가 너무 지저 분 하다 . 또한 레벨 1 치고 너무 어렵게 문제르 풀었다.
항상 문제를 풀고 리팩토링을 어떻게 효율적으로 하는지 찾고 싶었는데
특히 이 문제는 코드를 조금 더 효율적으로 짜야할 것 같다. */

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


  stages = stages.sort((a, b) => a - b);
  // console.log(stages);

  for (let i = 1; i <= N; i++) {
    // challenge의 개수는 stages의 배열 중 i이상의 개수를 filter 한다.
    challenge = stages.filter((el) => {
      return el >= i;
    }).length;
    // fail의 개수는 stages의 배열 중 i의 개수를 filter 한다.
    fail = stages.filter((el) => {
      return el === i;
    }).length;
    // console.log("28번쨰", fail, challenge);
    // result에 푸쉬 한다.
    if (challenge !== 0) {
      result.push(fail / challenge) 
    } else {
      result.push(0);
    }
  }
  console.log("33번쨰", result);

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
  // console.log(result2);
  return result2;
}

console.log(solution(3, [1, 1, 1]));
