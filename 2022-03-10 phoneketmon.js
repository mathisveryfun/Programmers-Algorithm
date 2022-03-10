// 21:35분 시작 21: 45분 종료

function solution(nums) {
    //input : nums인 배열
    //output : nums의 원소들중 중복되지 않게 고를 수 있는 최댓값을 리턴
    
    // nums배열을 filter 로 걸러내는데 indexOf 가 본인 자신인것으로만 걸러내고 그것을 filteredNums로 선언
    let filteredNums = nums.filter((el, idx) => {
        return nums.indexOf(el) === idx;
    })
    
    // filteredNums 의 길이나 nums길이 / 2 중 작은값을 리턴
    return Math.min(filteredNums.length, nums.length / 2);

}
console.log(solution([3, 1, 2, 3]))