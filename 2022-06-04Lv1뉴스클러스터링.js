// let str = "e=m*c^2";

// let pattern = /[a-zA-Z]/ig;
// console.log(str[1])
// console.log(pattern.test(str[0]))

// console.log(str);

function solution(str1, str2) {
  // 문자만 쓰는 정규식 패턴
  let pattern = /[a-zA-Z]/;

  // str1과 str2의 문자열을 2개씩 끊는다. 그것을 각각 배열 변수 str1Subset, str2Subset 이라 한다.
  const strToSubsetTwoLetter = (str) => {
    str = str.toLowerCase();
    let result = [];
    for (let i = 0; i < str.length - 1; i++) {
      // 2개씩 끊는중 영문자로 된 글자 쌍만 result에 푸쉬한다.
      if (pattern.test(str[i]) && pattern.test(str[i + 1])) {
        result.push(str[i] + str[i + 1]);
      }
    }
    return result;
  };
  const str1Subset = strToSubsetTwoLetter(str1); // [ 'aa', 'aa'. "bb", "bb", "bb" ]
  const str2Subset = strToSubsetTwoLetter(str2); // [ 'aa', 'aa', 'aa', "bb" ]
  // console.log(str1Subset, str2Subset);

  // str1Subset과 str2Subset의 교집합의 개수 intersection, 합집합의 개수 union을 구한다.
  const intersection = str1Subset.filter((el) => str2Subset.includes(el));
  let union = [...str1Subset];
  let unionCopy = [...str1Subset];
  let duplicationLetter = "";
  str2Subset.forEach((el) => {
    if (unionCopy.includes(el)) {
      duplicationLetter = el;
      let idx = unionCopy.indexOf(el);
      unionCopy.splice(idx, 1);
    } else {
      union.push(el);
    }
  });
  console.log(union);

  // intersection / union * 65536 하고 소수점 아래를 버린 값을 리턴한다.
  return Math.floor((intersection.length / union.length) * 65536);
}

console.log(solution("aa1+aa2", "AAAA12"));
