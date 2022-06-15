function solution(s) {
  const tmp = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  }
  for (let i = 0; i < s.length; i++) {
    let firstIdx = 0;
    let lastIdx = 0;
    if (typeof (s[i]) !== "number") {
      console.log('test')
      firstIdx = i;
      while( typeof (s[i]) === "number") {
        lastIdx = i;  
      }
    }
    const changeLetter = s.slice(firstIdx, lastIdx)
  }

}
console.log(solution("one4seveneight"))