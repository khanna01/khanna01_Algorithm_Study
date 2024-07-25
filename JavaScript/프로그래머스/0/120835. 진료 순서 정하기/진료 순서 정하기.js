function solution(emergency) {
    var answer = [];
    let n_array = [...emergency]
    n_array.sort((a, b) => b - a)
    for(let i of emergency) {
        answer.push(n_array.indexOf(i) + 1)
    }
    return answer;
}