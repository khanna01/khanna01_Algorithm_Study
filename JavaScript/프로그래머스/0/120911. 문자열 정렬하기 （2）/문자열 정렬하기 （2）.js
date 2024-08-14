function solution(my_string) {
    var answer = '';
    let n_string = my_string.toLowerCase()
    answer = n_string.split('').sort().join('')
    return answer;
}