function solution(s) {
  let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  let answer = s;

  for(let i = 0; i < numbers.length; i++) {
      let arr = answer.split(numbers[i]);
      console.log(arr)
      answer = arr.join(i);
      console.log(answer)
  }

  return Number(answer);
}
console.log(solution("one4seveneight"))