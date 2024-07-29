function solution(numbers, direction) {
    var answer = [];
    let tmp = numbers[0];
    if(direction === 'left') {
        let tmp = numbers[0];
        for(let i = 0; i < numbers.length; i++) {
            answer[i] = numbers[i+1];
        }
        answer[numbers.length -1] = tmp;
    } else {
        let tmp = numbers[numbers.length-1];
        for(let i = numbers.length-1; i > 0; i--) {
            answer[i] = numbers[i-1];
        }
        answer[0] = tmp;
    }
    return answer;
}