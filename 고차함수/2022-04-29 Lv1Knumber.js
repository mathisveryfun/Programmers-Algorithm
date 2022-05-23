function solution(array, commands) {
    return commands.map(command => {
        const [sPosition, ePosition, position] = command
        const newArray = array
            .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
            .sort((a,b) => a - b)    
            console.log(newArray)

        return newArray[position - 1]
    })
}
console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);

// 

// 느낀점 

/* 거진 두달만에 문제를 푸려니 어려웠다... for in for of의 차이도 까먹었다.
쉬운문제인데 어렵게 생각함.. */