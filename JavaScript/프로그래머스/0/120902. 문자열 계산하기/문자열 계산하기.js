function solution(my_string) {
    var answer = 0;
    let string = my_string.split(' ')
    answer = parseInt(string[0])
    for(let i = 1; i < string.length; i++) {
        if(!isNaN(parseInt(string[i]))) continue
        if(string[i] === "+") {
            answer += parseInt(string[i + 1])
        } else {
            answer -= parseInt(string[i + 1])
        }   
    }
    return answer;
}