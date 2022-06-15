// 12:25분 시작 12:35분 휴식 12:45분 속개 13:11분 휴식 13:17 분 속개 13:20 첫 제출 13: 31 분 최종 제출

// 걸린시간 : 50분 정도

// 막힌 부분 : progress 배열만 줄어드는게 아니라 그에 매핑되는 speed 배열로 같이 줄어들어야한다.!

function solution(progresses, speeds) {
  // 우선 언제까지 작업을 해야할까? progresses가 없어질때 까지
  // progresses의 원소들은 언제 없어지냐? 본인이 100이고 앞의 모든 원소도 100일때 없어짐!
  // 어떻게 100이 되냐? speeds 가 추가 됨.

  // result 빈 배열을 선언 후 할당
  let result = [];
  // while 문으로 progress.length > 0 일때 까지 반복문을 돌린다.
  while (progresses.length > 0 ) {
    // progresses 배열을 map으로 순회하면서
    progresses = progresses.map((el, idx) => {
      // 또 그안에 speeds 배열을 순회하면서 progress에 더해준다.
      el += speeds[idx];
      return el;
    });
    // progresses [0] 이 100이상이라면
    if (progresses[0] >= 100) {
      // 100이상이 몇개인지 센다.
      let count = 0;
      // 반복문으로 progresses 배열을 순회하면서 100인 값이 나오지 않을때까지 검색하고
      for (let i = 0; i < progresses.length; i++) {
        if (progresses[i] >= 100 && i == progresses.length - 1) {
          count += 1;
          result.push(count);
          progresses.splice(0, count)
          speeds.splice(0, count)
        } else if (progresses[i] >= 100) {
          count += 1;
        } else {
          // 그부분을 splice로 덜어낸후 count를 세어 result에 푸쉬한다.
          result.push(count)
          progresses.splice(0, count);
          speeds.splice(0, count)
          break;
        }
      }
    }
  }
  return result;
}
console.log(solution([40, 93, 30, 55, 60, 65], [60, 1, 30, 5 , 10, 7] ));
