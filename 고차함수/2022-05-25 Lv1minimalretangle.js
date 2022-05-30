// 16분

function solution(sizes) {
  // 이차원 배열 sizes의 원소 el을 순회한다
  const result = sizes.reduce((acc, cur) => {
    const biggerWidth = Math.max(acc[0], cur[0]);
    const biggerHeight = Math.max(acc[1], cur[1]);

    const reverseCur = [cur[1], cur[0]];

    const biggerWidth2 = Math.max(acc[0], reverseCur[0]);
    const biggerHeight2 = Math.max(acc[1], reverseCur[1]);

    return biggerWidth * biggerHeight > biggerWidth2 * biggerHeight2
      ? [biggerWidth2, biggerHeight2]
      : [biggerWidth, biggerHeight];
  });
  // el[0] 과 el[1]은 배열이다.
  // 이 둘의 원소2개를 바꿔보면서 면적이 가장 작은것을 찾는다.
  //   근데 그걸 어떻게 찾지?

  // 그것과 el[2] 를 바꿔보면서 면적인 가장 작은것을 찾는다.
  // 끝까지 반복한다.
  return result[0] * result[1]
}
