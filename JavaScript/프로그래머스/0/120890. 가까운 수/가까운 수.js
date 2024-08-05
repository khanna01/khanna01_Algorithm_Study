function solution(array, n) {
    var answer = 0;
    let n_array = array.map((value) => Math.abs(value - n))
    let min = Math.min(...n_array)
    let m_array = array.filter((value) => Math.abs(value - n) === min)
    answer = Math.min(...m_array)
    return answer;
}