function solution(my_string) {
    var answer = '';
    let string_array = my_string.split('')
    for(let i of string_array) {
        if(i.charCodeAt() <= 90) { 
            answer += i.toLocaleLowerCase()
        } else {
            answer += i.toLocaleUpperCase()
        }
    }
    return answer;
}