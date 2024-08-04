function isPrime(num) {
    if(num === 2 || num === 3) return true
    for(let i = 2; i < num; i++) {
        if(num % i === 0) return false
    }
    return true
}

function solution(n) {
    var answer = [];
    let num = n;
    let num2 = 2;
    for(;;) {
        if(isPrime(num)) {
            answer.push(num)
            break
        }
        if(num % num2 === 0 ) {
            if(isPrime(num / num2)) {
                answer.push(num2)
                answer.push(num /num2)
                break
            } else {
                num /= num2
                answer.push(num2)
                num2 = 2
            }
        } else {
            num2 += 1;
        }
    }
    
    answer = [...new Set(answer)]
    answer.sort((a,b) => a-b)
    return answer;
}