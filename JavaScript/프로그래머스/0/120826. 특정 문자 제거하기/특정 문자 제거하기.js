function solution(my_string, letter) {
    var answer = '';
    let string_array = my_string.split('')
    let string = string_array.filter(x => x !== letter)
    answer = string.join('')
    return answer;
}