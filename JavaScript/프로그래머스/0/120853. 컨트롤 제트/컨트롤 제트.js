function solution(s) {
    var answer = 0;
    s_array = s.split(' ')
    for(let i = 0; i < s_array.length; i++) {
        if(s_array[i] !== 'Z') {
            answer += parseInt(s_array[i])
        } else {
            answer -= s_array[i-1]
        }
    }
    return answer;
}