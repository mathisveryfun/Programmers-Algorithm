function solution(numbers, hand) {
    // 현재왼손위치 오른손위치 설정 초기값은 *# 둘다 11이라 가정
    let curLeft = '*';
    let curRight = '#';
    
    // result 문자열 선언
    let result = "";
    
    // 좌표로 번역하는 함수 선언
    const inputToCoodinate = (el) => {
        switch(el) {
            case 1:
                return [0, 0]
            case 2:
                return [0, 1]
            case 3:
                return [0, 2]
            case 4:
                return [1, 0]
            case 5:
                return [1, 1]
            case 6:
                return [1, 2]
            case 7:
                return [2, 0]
            case 8:
                return [2, 1]
            case 9:
                return [2, 2]
            case '*':
                return [3, 0]
            case 0:
                return [3, 1]
            case '#':
                return [3, 2]                
        }
    }
    
    // 왼쪽 오른쪽 중 누가 num과 가까운지 계산하는 함수 선언
    const shortDistance = (num) => {
        // 좌표설정
        let numCoodi = inputToCoodinate(num)
        let leftCoodi = inputToCoodinate(curLeft)
        let rightCoodi = inputToCoodinate(curRight)
        
        let leftDistance = Math.abs(numCoodi[0] - leftCoodi[0]) + Math.abs(numCoodi[1] - leftCoodi[1])
        let rightDistance = Math.abs(numCoodi[0] - rightCoodi[0]) + Math.abs(numCoodi[1] - rightCoodi[1])
        
        if (leftDistance === rightDistance) {
            return 'same'
        } else if (leftDistance < rightDistance) {
            return 'Lshort'
        } else if (rightDistance < leftDistance) {
            return 'Rshort'
        }    
        
    }

    
    //numbers 배열 순회하면서
    for (let number of numbers) {
        // 만약 1, 4, 7 중 하나면 Left누름
        if (number === 1 || number === 4 || number === 7) {
            result += 'L'
            curLeft = number;
        } else if (number === 3 || number === 6 || number === 9) {
            // 만약 3, 6, 9 중 하나면 Right 누름
            result += 'R'
            curRight = number;
        } else {
            // 2, 5, 8, 0 이면 거리 측정 
            // 거리가 다르면 가까운쪽 여기서 거리란 현재 number와 위치와의 차이의 절대값이 작은쪽이 누름
            if (shortDistance(number) === 'Lshort') {
                result += 'L'
                curLeft = number;                
            } else if (shortDistance(number) === 'Rshort') {
                result += 'R'                         
                curRight = number;
            }
            // 만약 눌렀는데 거리가 같다면
            if (shortDistance(number) === 'same') {
                // 손잡이 봄
                if (hand === 'left') {
                    result += 'L'
                    curLeft = number;  
                } else if (hand === 'right') {
                    result += 'R'
                    curRight = number;
                }
            }
            
        }
    }
    return result;
}