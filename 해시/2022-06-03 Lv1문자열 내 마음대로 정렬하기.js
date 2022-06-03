function solution(strings, n) {
  return strings.sort((a, b) => {
    let firstLetter = a[n]
    let secondLetter = b[n]

    if (a[n] === b[n]) {
      return (a > b) - ( a < b );
    } else {
      return (firstLetter > secondLetter) - (firstLetter < secondLetter);
    }
  })
}
console.log(solution(["sun", "bed", "car"],1))