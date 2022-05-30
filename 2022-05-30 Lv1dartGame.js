// 20:36 분 시작

// 01: 16분 종료

function solution(dartResult) {
  // pasNum, presentNum 변수를 선언 후 빈 문자열로 할당한다.
  let pasNum = "";
  let presentNum = "";
  // result 변수를 선언 후 0으로 할당한다.
  let result = 0;

  // dartResult 문자열을 반복문으로 순회한다.
  for (let i = 0; i < dartResult.length; i++) {
    // 경우는 두가지가 있다. 문자열을 숫자로 바꿨을때
    // 숫자이거나 아니거나
    if (isNaN(Number(dartResult[i])) === false) {
      // dartResult[i]가 숫자일때
      // dartResult[i - 1]이 기호였다면 result에 pasNum을 더해준다.
      if (isNaN(Number(dartResult[i - 1])) === true && dartResult[i - 1]) {
        result += pasNum;
      }
      // 만약 presentNum이 "1"이고 dartResult[i] 가 0이면 10으로 만들어야함.
      if (presentNum === "1" && dartResult[i] === "0") {
        presentNum += "0";
      } else if (presentNum !== "") {
        // presentNum이 있을때
        // pasNum은 presentNum으로 할당하고 dartResult[i]를 presentNum에 할당한다.
        pasNum = presentNum;
        presentNum = dartResult[i];
      } else {
        // presentNum이 없을때
        // presentNum이 없을때는 dartResult[i] 값을 presentNum에 할당한다.
        presentNum = dartResult[i];
      }
    } else {
      // datResult[i]가 숫자가 아닐때
      // pasNum과 presentNum을 숫자로 변환한다.
      pasNum = Number(pasNum);
      presentNum = Number(presentNum);
      if (dartResult[i] === "*") {
        // *를 만나면 presentNum에 2배를 한다.
        presentNum = presentNum * 2;
        // 추가로 pasNum이 있다면 역시 2배를 한다.
        if (pasNum) {
          pasNum = pasNum * 2;
        }
      } else {
        // 순회하면서 문자를 만난다.
        // presentNum을  S, D, T 규칙에 따라 적용한다.
        if (dartResult[i] === "S") {
          presentNum = Math.pow(presentNum, 1);
        } else if (dartResult[i] === "D") {
          presentNum = Math.pow(presentNum, 2);
        } else if (dartResult[i] === "T") {
          presentNum = Math.pow(presentNum, 3);
        }
      }

      if (dartResult[i] === "#") {
        // # 을 만나면 presentNum에 -1을 곱한다.
        presentNum = presentNum * (-1);
      }
    }
  }
  return result + Number(pasNum) + Number(presentNum);
}

console.log(solution("10D4S10D"))
