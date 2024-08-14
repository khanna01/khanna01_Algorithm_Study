function solution(array) {
    var answer = 0;
    let n_array = array.join('').split('').filter((value) => parseInt(value) === 7)
    answer = n_array.length
    return answer;
}