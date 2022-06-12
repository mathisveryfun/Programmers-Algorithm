function solution(str1, str2) {
  // 문자만 쓰는 정규식 패턴
  let pattern = /[a-z]{2}/;

  // str1과 str2의 문자열을 2개씩 끊는다. 그것을 각각 배열 변수 str1Subset, str2Subset 이라 한다.
  const strToSubsetTwoLetter = (str) => {
    str = str.toLowerCase();
    let result = [];
    for (let i = 0; i < str.length - 1; i++) {
      // 2개씩 끊는중 영문자로 된 글자 쌍만 result에 푸쉬한다.
      const tmp = str.substr(i, 2)
      if (pattern.test(tmp)) {
        result.push(tmp);
      }
    }
    return result;
  };
  const str1Subset = strToSubsetTwoLetter(str1); // [ 'ba', 'aa', 'aa', 'aa' ]
  const str2Subset = strToSubsetTwoLetter(str2); // [ 'aa', 'aa' ]
  // console.log("20번쨰", str1Subset, str2Subset);

  // str1Subset과 str2Subset의 교집합의 개수 intersection, 합집합의 개수 union을 구한다.
  const arr1 = strToSubsetTwoLetter(str1);
  const arr2 = strToSubsetTwoLetter(str2);
  const set = new Set([...arr1, ...arr2]);
  console.log("26번째", arr1, arr2, set)
  let union = 0;
  let intersection = 0;

  set.forEach(item => {
    const has1 = arr1.filter(x => x === item).length;
    const has2 = arr2.filter(x => x === item).length;
    union += Math.max(has1, has2);
    intersection += Math.min(has1, has2);
  })

  // intersection / union * 65536 하고 소수점 아래를 버린 값을 리턴한다.
  return union === 0 ? 65536 : Math.floor(intersection / union * 65536);
}

console.log(solution("handshake", "shake hands"));
