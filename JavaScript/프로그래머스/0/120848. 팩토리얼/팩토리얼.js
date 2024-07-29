function solution(n) {
    var answer = 0;
    let sum = 1;
    for(let i = 1; i <= 10; i++) {
        sum *= i
        if(sum === n) {
            answer = i
            break
        } else if(sum > n) {
            answer = i - 1
            break
        }
    }
    return answer;
}