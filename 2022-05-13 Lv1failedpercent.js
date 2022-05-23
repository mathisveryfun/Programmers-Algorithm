function solution(N, stages) {
  // 1번 스테이지 실패율을 구하려고 한다.
  // stages에서 1번이상의 개수를 찾는다.el1
  // stages에서 2번이상의 개수를 찾는다.el2
  // el1 / el2 가 실패율이다.

  // 2번 스테이지 실패율을 구하려고 한다.
  // stages에서 2번이상의 개수를 찾는다.el2
  // stages에서 3번이상의 개수를 찾는다.el3
  
  // 자 그러면 중요한것은 n번이상의 개수가 중요하다. 
  // 개수는 어떻게 구할까

  // 우선 stages배열을 오름차순으로 정렬한다.
  // -> [1, 2, 2, 2, 3, 3, 4, 6]
  const increaseStages = stages.sort((a, b) => a - b);
  // console.log(increaseStages);

    // 자 이제 실패율을 객체에 저장한다.
    let result = {};
    let curCursor = 0;
    let     

  // increaseStages 배열을 순회하면서
  // 1번 이상의 개수는 배열의 요소값이 1이상인것부터 싹다 ]=> 전체 개수 - 1이상을 마주친인덱스 
  // 2번 이상의 개수는 배열의 요소값이 2인것부터. 싹다 => 
  // n번 이상의 개수는 배열의 요소값이 n이넛부터 싹다 => 전체 개수 - n이상을 마주친 인덱스

  // n번 이상과 n + 1번 이상의 개수를 구한이상 실패율 을 계산한다. n번쨰 실패율이다.
  for (let el of increaseStages) {
    
  }


  // 객체를 분석한다.
  


}
console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
