function solution(order) {
    var answer = 0;
    let o_array = order.toString().split('')
    for(let i of o_array) {
        if(i === '3' || i === '6' | i === '9') answer += 1
    }
    return answer;
}