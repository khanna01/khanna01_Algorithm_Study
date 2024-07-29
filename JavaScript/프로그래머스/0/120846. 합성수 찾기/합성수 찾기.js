function isCompositeNumber(num) {
    let result = 0;
    for(let i = 1; i <= num; i++) {
        if(num % i === 0) result += 1;
        if(result >= 3) return true
    }
    return false
}

function solution(n) {
    var answer = 0;
    for(let i = 1; i <= n; i++) {
        if(isCompositeNumber(i)) answer += 1;
    }
    return answer;
}