// 19:34 시작

function solution(s) {
  // s문자열을 끝까지 스캔하면서 끝까지 스캔이 완료되면 종료

  // 연속으로 같은 문자가 나오면 그 사이를 splice로 지우고 다시 반복

  let i = 0;
  while (i < s.length - 1) {
    let backword = s[i];
    let frontword = s[i + 1];
    console.log(12, backword, frontword)

    if (backword === frontword) {
      s = s.split("");
      console.log(16, s)
      s.splice(i, 2);
      console.log(18, s)
      s = s.join("");
      console.log(20, s)
      i = 0;
    } else {
    i++
    console.log(24, s)
    }
  }
  if (!s) {
    return 1
  } else {
    return 0
  }
  
}
console.log(solution("baabaa"));
