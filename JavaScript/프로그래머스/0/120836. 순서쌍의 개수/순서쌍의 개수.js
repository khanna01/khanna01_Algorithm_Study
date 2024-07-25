function solution(n) {
    var answer = 0;
    let num = [];
    for(let i = 1; i <= Math.ceil(n / 2); i++) {
        if(num.includes(i)) continue
        if(n % i === 0) {
            num.push(i)
            if(Math.floor(n / i) !== i) num.push(Math.floor(n / i))
        }
    }
    answer = num.length
    return answer;
}