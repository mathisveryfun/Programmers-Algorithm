//22:42 시작 
// 느낀점: 어렵지는 않은데 코드가 너무 더럽다.
// 밑에 filter를 쓴 모범답안이 있는데 왜 내가 모듈로를 생각을 못했을까...

function solution(answers) {
  // 1, 2, 3번 점수를 count로 놓는다.
  let firstScore = 0;
  const firstRandom = [1, 2, 3, 4, 5];
  let secondScore = 0;
  const secondRandom = [2, 1, 2, 3, 2, 4, 2, 5];
  let thirdScore = 0;
  const thirdRandom = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let i = 0;
  let j = 0;
  let k = 0;

  // answer를 반복하며 count를 올린다.

  while (answers.length > 0) {
    if (firstRandom[i] === answers[0]) {
      firstScore += 1;
    }
    if (secondRandom[j] === answers[0]) {
      secondScore += 1;
    }
    if (thirdRandom[k] === answers[0]) {
      thirdScore += 1;      
    }
    i += 1;
    if (i === 5) {
      i = 0;      
    }
    j += 1;
    if (j === 8) {
      j = 0;
    }
    k += 1;
    if (k === 10) {
      k = 0;
    }
    answers.shift();   
  }
  // Score가 가장 높은 사람을 리턴한다.
  const maxScore = Math.max(firstScore, secondScore, thirdScore);
  const result = [];

  
  if (maxScore === firstScore) {
    result.push(1)
  }
  if (maxScore === secondScore) {
    result.push(2)
  }
  if (maxScore === thirdScore) {
    result.push(3)
  }
  return result;
}

function solution(answers) {
    var answer = [];
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
    var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
    var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
    var max = Math.max(a1c,a2c,a3c);

    if (a1c === max) {answer.push(1)};
    if (a2c === max) {answer.push(2)};
    if (a3c === max) {answer.push(3)};


    return answer;
}

console.log(solution([3, 3, 1, 1, 1, 1, 2, 3, 4, 5]))