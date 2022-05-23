function solution(n, arr1, arr2) {
  // 반환할 result를 선언하고 빈 분자열이 원소인 배열로 할당한다.
  const result = new Array(n).fill("");

  // 2진법으로 해석할 함수를 정의한다.
  const numberArrToBinary = (arr) => {
    return arr.map((el) => {
      // 정수를 2진법 문자열로 바꾸고 binaryNum에 할당한다.
      let binaryNum = el.toString(2);
      while (binaryNum.length < n) {
        binaryNum = "0" + binaryNum;
      }
      return binaryNum;
    });
  };
  // arr1, arr2의 원소들을 각각 2진법으로 해석하고
  // 그결과값을 각각 binaryArr1, binaryArr2에 할당한다.
  const binaryArr1 = numberArrToBinary(arr1);
  const binaryArr2 = numberArrToBinary(arr2);
  // [9, 20, 28, 18, 11] => [01001, 10100, 11100, 10010, 01011]

  // binaryArr1, binaryArr2의 원소문자열(el1, el2)를 각각 순회하면서
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // binaryArr1[i][j], binaryArr2[i][j] 중 하나라도 문자 1이면 문자열 #을 result[i]에 할당하고 아니면 공백을 할당한다.
      if (binaryArr1[i][j] === "1" || binaryArr2[i][j] === "1") {
        result[i] += "#";
      } else {
        result[i] += " ";
      }
    }
  }
  // result 배열을 반환한다.
  return result;
}
// console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));

/* 
시간: 40분 걸림

느낀점: function의 첫번째 인자인 n을 못봐서 굉장히 헤맸다.
n이 없을때는 원소 중 가장 긴 길이를 따로 찾아야될것같은데 그게 굉장히 비효율적일것같아 많이 고민했다.

다른풀이: 

function solution(n, arr1, arr2) {
    return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
}

const addZero = (n, s) => {
    return '0'.repeat(n - s.length) + s;
}
다들 zero를 어떻게 넣을것인지에 대한 고민이 있었다.
또한 정규식을 공부해야겠다...쭈..

 */
