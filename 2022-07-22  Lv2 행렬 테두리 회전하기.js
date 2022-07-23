//09:11 시작 12:44 종료 3시간 소요

// 시간이 걸린 원인
// 1. 행렬을 오름차순으로 만드는 방법이 고민
// 2. 행렬을 회전시키는 방법을 고민

// 느낀점
// 내 힘으로 하니까 뿌듯하닌 함 허나 행렬 알고리즘을 빨리 최적화 시켜야 겠다고 마음먹음
// 우선 문제를 풀고 그 다음 코드 최적화를 시키는게 나은것 같음.

function solution(rows, columns, queries) {
  // 1, row, columns 으로 기본 행렬 baseData을 만드로 result 배열도 만든다.
  let baseData = [];
  let tmpRows = [];
  for (let i = 1; i <= rows * columns + 1; i++) {
    if (tmpRows.length === columns) {
      baseData.push(tmpRows);
      tmpRows = [];
      i = i - 1;
    } else {
      tmpRows.push(i);
    }
  }
  // console.log(baseData)
  let result = [];

  // 2. queires 배열을 돌면서 회전을 시키는데 한번 회전시킬때마다 회전숫자들중 가장 작은 숫자를 찾아
  // result 배열에 푸쉬한다..
  queries.forEach((el, idx, arr) => {
    let leftRowNumber = el[0] - 1;
    let leftColumnNumber = el[1] - 1;
    let rightRowNumber = el[2] - 1;
    let rightColumnNumber = el[3] - 1;
    // console.log(
    //   leftRowNumber,
    //   leftColumnNumber,
    //   rightRowNumber,
    //   rightColumnNumber
    // );

    let tmpQueue = [baseData[leftRowNumber][leftColumnNumber]];
    // console.log(tmpQueue)
    let tmpNumber = [baseData[leftRowNumber][leftColumnNumber]];

    for (let x = leftColumnNumber; x < rightColumnNumber; x++) {
      tmpNumber.push(baseData[leftRowNumber][x + 1]);
      tmpQueue.push(baseData[leftRowNumber][x + 1]);
      baseData[leftRowNumber][x + 1] = tmpQueue.shift();
    }
    for (let x = leftRowNumber; x < rightRowNumber; x++) {
      tmpNumber.push(baseData[x + 1][rightColumnNumber]);
      tmpQueue.push(baseData[x + 1][rightColumnNumber]);
      baseData[x + 1][rightColumnNumber] = tmpQueue.shift();
    }
    for (let x = rightColumnNumber; x > leftColumnNumber; x--) {
      tmpNumber.push(baseData[rightRowNumber][x - 1]);
      tmpQueue.push(baseData[rightRowNumber][x - 1]);
      baseData[rightRowNumber][x - 1] = tmpQueue.shift();
    }
    for (let x = rightRowNumber; x > leftRowNumber; x--) {
      tmpNumber.push(baseData[x - 1][leftColumnNumber]);
      tmpQueue.push(baseData[x - 1][leftColumnNumber]);
      baseData[x - 1][leftColumnNumber] = tmpQueue.shift();
    }

    // console.log(baseData);
    // console.log(tmpNumber)
    result.push(Math.min(...tmpNumber));
    // console.log(result)
  });

  // 3, 가장 작은 숫자들을 모든 result 배열을 리턴한다.
  return result;
}

console.log(
  solution(6, 6, [[2,2,5,4],[3,3,6,6],[5,1,6,3]])
);
