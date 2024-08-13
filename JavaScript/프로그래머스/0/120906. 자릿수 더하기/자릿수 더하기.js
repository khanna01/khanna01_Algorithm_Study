function solution(n) {
    var answer = 0;
    let array = n.toString().split('').map((value) => parseInt(value)).map((value) => answer += value)
    return answer;
}