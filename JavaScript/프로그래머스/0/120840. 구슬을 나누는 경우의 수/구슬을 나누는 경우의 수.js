function factorial(num) {
    let result = 1;
    for(let i = 1; i <= num; i++) {
        result *= i
    }
    return result
}

function solution(balls, share) {
    var answer = 0;
    let numer = factorial(balls);
    let denom = factorial(balls - share) * factorial(share);
    answer = Math.round(numer / denom);    
    return answer;
}