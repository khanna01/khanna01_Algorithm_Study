function solution(my_string) {
    var answer = 0;
    let string_array = my_string.split('').filter((value) => parseInt(value))
    for(let i of string_array) {
        answer += parseInt(i)
    }
    return answer;
}