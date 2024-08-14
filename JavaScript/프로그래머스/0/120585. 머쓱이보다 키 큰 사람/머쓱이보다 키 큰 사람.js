function solution(array, height) {
    var answer = 0;
    let n_array = array.filter((value) => value > height)
    answer = n_array.length
    return answer;
}