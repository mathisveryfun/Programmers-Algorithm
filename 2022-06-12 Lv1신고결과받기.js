// 걸린시간 : 1시간 정도

// 걸린이유 : 문제 자체를 이해하는데 어려웠고, 그에 따라 로직을 짜느넛 조차 시간이 많이 걸림.

// 느낀점 : 객체를 너무 많이 이용하고 있다는 느낌이 듬.

// 개선할 코드 : reportState와 mailMember을 한 가지 작동으로 통합할 수는 없을까?


function solution(id_list, report, k) {
  // report 배열에서 중복을 없애기
  report = [...new Set(report)];
  // reportState객체 생성하기
  const reportState = {};
  // goodMember 배열 생성하기
  let mailMember = [];

  // report 배열을 순회하면서 reportState에 저장하기
  report.forEach((el) => {
    const [reporter, reported] = el.split(" ");
    if (!reportState[reported]) {
      reportState[reported] = [reporter];
    } else {
      reportState[reported].push(reporter);
    }
  });
  // console.log(reportState);
  // reportState객체를 순회하면서 키의 값이 k이상 인것만 필터하여 신고자들을 mailMember 배열에 저장한다.
  for (let key in reportState) {
    if (reportState[key].length >= k) {
      mailMember.push(...reportState[key])              
    }
  }
  // console.log(mailMember);
  // id_list를 map 으로 순회하며 메일 받는횟수 리턴
  return id_list.map((el) => {
    let count = 0;
    mailMember.forEach((innerEl) => {
      if (innerEl === el) {
        count += 1;
      }
    })
    return count;
  })
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);
