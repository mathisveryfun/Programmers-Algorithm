// 19:34 시작

function solution(s) {
  // s문자열을 끝까지 스캔하면서 끝까지 스캔이 완료되면 종료
  let stack = [];
  stack.push(s[0]);
  
  for (let i = 1; i < s.length; i++) {
    if (stack[stack.length - 1] !== s[i]) {
      stack.push(s[i])      
    } else {
      stack.pop();
    }
  }
  if (stack.length === 0 ) {
    return 1
  } else {
    return 0
  }

}
console.log(solution("baabaa"));

// 실패사유: 1000000크기이므로 문자열을 수정하는 방법은 시간 초과

/* function solution(s) {
  // s문자열을 끝까지 스캔하면서 끝까지 스캔이 완료되면 종료

  // 연속으로 같은 문자가 나오면 그 사이를 splice로 지우고 다시 반복
  let i = 0;
  while (i < s.length - 1) {
    let backword = s[i];
    let frontword = s[i + 1];
    if (backword === frontword) {
      s = s.split("");
      s.splice(i, 2);
      s = s.join("");
      i = Math.max(i - 1, 0);
    } else {
      i++;
    }
  }
  if (!s) {
    return 1;
  } else {
    return 0;
  }
}
console.log(solution("baabaa")); */
