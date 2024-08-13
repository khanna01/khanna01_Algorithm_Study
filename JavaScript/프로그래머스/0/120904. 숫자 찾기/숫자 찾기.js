function solution(num, k) {
    var answer = 0;
    let array = num.toString().split('')
    let array2 = array.map((value) => parseInt(value))
    if(array2.indexOf(k) !== -1) answer = array2.indexOf(k) + 1
    else answer = -1

    return answer;
}