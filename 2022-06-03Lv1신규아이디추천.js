function solution(new_id) {
  var answer = '';
  //1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
   new_id = new_id.toLowerCase();
   console.log(new_id)
  //2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
  new_id = new_id.replace(/[^a-z0-9-_.]/g, "")
  console.log(new_id)
  //3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
  new_id = new_id.replace(/[.]+/g,".")
  console.log(new_id)
  // 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
  if (new_id[0] === ".") {
    new_id = new_id.slice(1)
  }
  if (new_id[new_id.length - 1] === ".") {
    new_id = new_id.slice(0, -1)
  }
  console.log(new_id)

  // 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
  if (!new_id) {
    new_id = "a";
  }
  console.log(new_id)
  //6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
  if (new_id.length >= 16) {
    if (new_id[14] === ".") {
      new_id = new_id.slice(0, 14)    
    } else {
      new_id = new_id.slice(0, 15)
    }
  }
  console.log(new_id)
  //7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
  if (new_id.length <= 2) {
    while(new_id.length < 3) {
      new_id += new_id[new_id.length - 1]
    }
  }
  console.log(new_id)
  return new_id
  
}
console.log(solution("abcdefghijklmn.p"))







//22:34 시작