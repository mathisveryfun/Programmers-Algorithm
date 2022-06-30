function solution(s) {
  // input은 문자열이다.
  // result 배열을 선언한다.
  let result = [];

  // s 문자열을 배열로 만든다.
  let strList = s.replace("{{", "").replace("}}", "").split("},{");
  // console.log(strList) => [ '4,2,3', '3', '2,3,4,1', '2,3' ]

  // strList의 각 원소를 배열로 만들어 줌
  let setList = [];
  for (let i = 0; i < strList.length; i++) {
    setList.push(strList[i].split(","));
  }
  // console.log(setList) => [ [ '4', '2', '3' ], [ '3' ], [ '2', '3', '4', '1' ], [ '2', '3' ] ]

  // setList를 배열 원소의 크기 순으로 다시 정렬
  setList.sort((a, b) => {
    if (a.length > b.length) {
      return 1;
    } else {
      return -1;
    }
  });
  // console.log(setList) => [ [ '3' ], [ '2', '3' ], [ '4', '2', '3' ], [ '2', '3', '4', '1' ] ]

  // 우선 setList의 첫번째 원소는 result에 푸쉬한다.
  result.push(parseInt(setList[0][0]));
  // console.log(result) => [3]
  // setList배열을 1번 인덱스부터 다시 스캔하면서 그전원소에서 없던 원소를 찾아줄 함수 만들기
  const getElement = (set, result) => {
    // result = [3, 2], set ['4', '2', '3']
    for (let i = 0; i < set.length; i++) {
      for (let j = 0; j < result.length; j++) {
        set = set.filter((el) => parseInt(el) !== result[j]);
      }
      result.push(parseInt(set[0]));
    }
  };
  for (let i = 1; i < setList.length; i++) {
    let el = getElement(setList[i], result);
  }

  return result;
}

const test = "{{4,2,3},{3},{2,3,4,1},{2,3}}";
console.log(solution(test));
