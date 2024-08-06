function solution(s) {
    var answer = '';
    let s_array = s.split('')
    s_array.sort()
    for(let i = 0; i < s_array.length; i++) {
        if(s_array.indexOf(s_array[i]) === s_array.lastIndexOf(s_array[i])) {
            answer += s_array[i]
        } else {
            i = s_array.lastIndexOf(s_array[i])
        }
    }
    return answer;
}