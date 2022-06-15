function solution(n, lost, reserve) {
  // 먼저 lost의 원소와 reserve의 원소가 같은것이 있으면 그것먼저 없애자.
  lostCopy = lost.slice();
  lost = lost.filter((el) => {
    return !reserve.includes(el);
  });
  reserve = reserve.filter((el) => {
    return !lostCopy.includes(el);
  });
  // console.log(lost, reserve)
  lost = lost.sort();
  reserve = reserve.sort();

  let count = 0;

  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j <= reserve.length; j++) {
      if (
        lost[i] - 1 === reserve[j] ||
        lost[i] + 1 === reserve[j]
      ) {
        count += 1;
        reserve[j] = 0;
        break;
      }
    }
  }
  return n - lost.length + count;
}

/* function solution(n, lost, reserve) {
  lost = lost.sort();
  reserve = reserve.sort();
  let count = 0;

  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j <= lost[i] + 1; j++) {
      if (
        lost[i] === reserve[j] ||
        lost[i] - 1 === reserve[j] ||
        lost[i] + 1 === reserve[j]
      ) {
        count += 1;
        reserve[j] = 0;
        break;
      }
    }
  }
  return n - lost.length + count;
} */
console.log(solution(7, [1, 2, 3, 4, 5, 6, 7], [1, 2, 3]));

/* function solution(n, lost, reserve) {
  const findIdx = (element) => {
    if (reserve.indexOf(element) !== -1) {
      return reserve.indexOf(element)
    } else if (reserve.indexOf(element - 1) !== -1) {
      return reserve.indexOf(element - 1)
    } else if (reserve.indexOf(element + 1) !== -1) {
      return reserve.indexOf(element + 1)
    } else {
      return "test"
    }
  }
  lost = lost.filter((el, idx) => {
    if (findIdx(el) !== "test") {
      reserve.splice(findIdx(el), 1)  
      return false;
    } else {
      return true;
    }
  })
  console.log(lost)
}
console.log(solution(5, [2, 4], [3])) */
