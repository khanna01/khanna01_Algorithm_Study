function solution(my_string) {
    var answer = [];
    let string_array = my_string.split('').filter((value) => parseInt(value) >= 0)
    for(let i of string_array) {
        answer.push(parseInt(i))
    }
    answer.sort((a,b) => a -b)
    return answer;
}