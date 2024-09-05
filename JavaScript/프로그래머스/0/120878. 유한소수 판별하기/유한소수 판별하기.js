function isPrime(x) {
    let answer = true
    for(let i = 2; i < x; i++) {
        if(x % i === 0) {
            answer = false
            break
        }
    }
    return answer;
}

function getGcd(x, y) {
    let answer = 0
    let array = [x, y].sort((a,b) => b-a)
    for(;;) {
        if(array[0] % array[1] === 1 || array[1] === 1) {
            break
        } else if(array[0] % array[1] === 0) {
            answer = array[1]
            break
        } else {
            let tmp = (array[0] % array[1])
            array[0] = array[1]
            array[1] = tmp
            array.sort((a,b) => b-a)
        }
    }
    return answer;
}

function solution(a, b) {
    let x = a
    let y = b
    var answer = 1;
    for(;;) {
        let gcd = getGcd(x, y)
        if(gcd) {
            x /= gcd
            y /= gcd
        } else {
        break
        }
    }
    let div_array = []
    for(let i = 2; i <= y; i++) {
        if(y % i === 0)
            div_array.push(i)
    }
    for(let i of div_array) {
        if(isPrime(i)) {
            if(i !== 2 && i !== 5) {
                answer = 2
                break
            }
        }
    }
    return answer;
}