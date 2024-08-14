function solution(array, n) {
    var answer = 0;
    let n_array = array.filter((value) => value === n)
    answer = n_array.length
    return answer;
}