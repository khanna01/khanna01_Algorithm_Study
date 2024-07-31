function solution(my_string) {
    var answer = '';
    string_array = my_string.split('')
    answer_array = string_array.filter((value) => value !== 'a' && value !== 'e' && value !== 'i' && value !== 'o' && value !== 'u')
    for(let i of answer_array) answer += i
    return answer;
}