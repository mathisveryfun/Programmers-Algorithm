// 21:44분 시작 22:11분 종료

// 첫번째 풀이
function solution(absolutes, signs) {
    let result = 0;
    
    for (let i = 0; i < absolutes.length; i++) {
        // true랑 비교할때 "true" 쓰면 안됨...
        if (signs[i] === true) {
            result += absolutes[i];
        } else  {
            // 뺴기를 어떻게 하냐가 막혔네 이게 핵심인듯...
            result =  result - absolutes[i];
        }
    }
    
    return result;
}

console.log(solution([4, 7, 12], [true, false, true]))

// 두번째 풀이

function solution(absolutes, signs) {
    // absolutes는 배열이고 이 아이를 순회할거임!
    // 삼항연산자 쓰자!
    // reduce로 순회하면서 만약 signs가 true 이면 그냥 cur을 acc에 더하고
    // 아니면 -cur을 acc에 더하자
    let result = absolutes.reduce((acc, cur, i) => {
        signs[i] ? acc += cur : acc = acc - cur;
        return acc
    // 여기서 0을 최촛값으로 정해주지 않아 해맴!   
    }, 0)
    return result;
}

console.log(solution(	[1, 2, 3], [false, false, true]))

