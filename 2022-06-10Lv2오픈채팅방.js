// 소요시간 30분

// 느낀점: 임시로 uuid를 지정해 놓고 마지막에 바꾸면 됐었다.

function solution(record) {
  // uuid를 키로, 이름을 value로 저장할 db를 만든다.
  const db = {};
  let result = [];

  // record의 원소들을 따로 분리한다.
  record = record.map((el) => {
    return el.split(" ");
  });
  // record 2차원 배열의 원소 el를 순회하면서
  record.forEach((el) => {
    // 만약 el의 첫 단어가 Enter 이면
    if (el[0] === "Enter") {
      // uuid를 확인하고 db에 이름을 저장한다음
      db[el[1]] = el[2];
      // result배열에 "el[1]님이 들어왔습니다"
      result.push([el[1], "Enter"]);
      // 만약 el의 첫 단어가 Leave 이면
    } else if (el[0] === "Leave") {
      result.push([el[1], "Leave"]);
      // 만약 el의 첫 단어가 Change 이면
    } else if (el[0] === "Change") {
      db[el[1]] = el[2];
    }
  });
  // console.log(result)
  // console.log(db)
  // result 배열을 순회하며 db를 확인하며 문장을 완성한다.
  result = result.map((el) => {
    if (el[1] === "Enter") {
      return `${db[el[0]]}님이 들어왔습니다.`;
    } else if (el[1] === "Leave") {
      return `${db[el[0]]}님이 나갔습니다.`;
    }
  });
  // result를 리턴한다.
  return result;
}
console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);
