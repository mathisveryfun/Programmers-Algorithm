/* 
2번
2개씩 2ab2cd2ab2cd => 12개
8개씩 2ababcdcd => 9개

3번
3개씩 2abcdede => 8개

1개씩 단위로 자름 
record = s.substr(0, 1);
만약 s.substr(1, 1) 이 record와 같으면 패스하고 카운트 1업
만약 si.substr(2, 1) 가 record와 같으면 패스인데
아니므로 record = el[2] 함.
만약 s.substr(3, 1) 가 record와 같으면 패스하고 카운트 1업
만약 el[4] 가 record와 같으면 패스인데
다르므로 record = el[4].
이것을 문자열 끝까지 반복.
반복하면 카운트 결과를 result 배열에 저장.

2개씩 단위로 다름
record = s.substr(0, 2);
만약 s.substr(2, 2) 가 record와 같으면 패스하고 카운트 2업
..

3개씩 단위로 자름.
record = s.substr(0, 3);
만약 s.substr(3, 3) 가 record와 같으면 패스하고 카운트 3업
다르면 record = s.substr(3, 3)

n개씩 단위로 자름.
record = s.substr(0, n);
만약 s.substr(n, n)가 record와 같으면 패스하고 카운트 n업.
다르면 record = s.substr(n, n)

다음 만약 s.substr(2n, n) 가 record와 같으면 패스하고 카운트 n업
다르면 record = s.substr(2n, n);
언제까지? ( (m - 1)n 부분이 s.length보다 작을때까지
 */
function solution(s) {
  let result = [];
  // console.log(s.length);

  for (let i = 1; i <= s.length; i++) {
    let discount = 0;
    let record = s.substr(0, i);
    let state = false;
    for (let j = 1; j * i + 1 <= s.length; j++) {
      if (s.substr(j * i, i) === record) {
        discount += i;
        state = true;
      } else {
        record = s.substr(j * i, i);
        if (state) {
          discount -= 1;
          state = false;
        }
      }
    }
    if (state) {
      discount -= 1;
    }
    result.push(discount);
  }
  console.log(result);
  const maxDiscount = Math.max(...result);
  return s.length - maxDiscount
}
console.log(solution("abcabcdede"));

/* 
for (let i = 0; i < s.length; i++) {
  let discount = 0;
  let record = s.substr(0, i);
  if (s.substr(i, i) === record) {
    discount += i;    
  };
  if (s.substr(2 * i, i) === record) {
    discount += i;
  };
} */

/* 2 * 2, 2 ok
3 * 2, 2  ok 3 * 2 + 2 - 1 <= 7

m * n + 1 <= s.length

m은 1부터 3까지 왜?  */
