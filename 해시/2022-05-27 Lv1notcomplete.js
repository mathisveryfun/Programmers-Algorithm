function solution(participant, completion) {
  for (let i = 0; i < participant.length; i++) {
      for (let j = 0; j < completion.length; j++) {
          if (participant[i] === completion[j]) {
              completion.splice(j, 1)
              break;
          }
          if (j === completion.length - 1) {
              return participant[i]
          }
      }
  }
}
// 근데 이게 시간복잡도에서 문제가 생기네..

// 두번쨰 풀이..l

function solution(participant, completion) {
  const map = {};
  for (let completeName of completion) {
      map[completeName] = 1;
  }
  
  for (let participantName of participant) {
      if (map[participantName]) {
          delete map[participantName]
      } else {
          return participantName
      }
  }
}
// 정답풀이

function solution(participant, completion) {
  const map = {};
  for (let completeName of completion) {
      if (!map[completeName]) {
          map[completeName] = 1
      } else {
          map[completeName] += 1;
      }
  }
  
  for (let participantName of participant) {
      if (map[participantName] >= 1) {
          map[participantName] -= 1;
      } else {
          return participantName
      }
  }
}