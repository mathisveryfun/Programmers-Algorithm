function solution(progresses, speeds) {
  const goodDay = progresses.map((el, idx) => {
    return Math.ceil((100 - el) / speeds[idx]);   
  })
  console.log(goodDay);


}

console.log(solution([93, 30, 55], [1, 30, 5]));


/*
1. 번역한다. 
작업진도가 끝나는 날을 찾는다.
예를들어 0번쨰는 7일에 끝난다.왜? 100 - 93 / 1 일
예를들어 1번째는 3일에 끝난다.왜? (100 - 30 / 30)올림 일 
예를들어 2번쨰는 9일에 끝난다.(100 - 55 / 5)


2. 재귀한다.
[5, 10, 1, 1, 20, 1];

카운트 0으로 바꾸기.
0번쨰 curday 는 5이므로 가능.
1번쨰 는 curday보다 크므로 컷.
=> 1개를 푸쉬하고 1번째를 curday로 교체




*/

