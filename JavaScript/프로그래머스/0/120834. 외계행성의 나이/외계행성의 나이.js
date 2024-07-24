function solution(age) {
    var answer = '';
    let age_array = age.toString()
    for(let i of age_array){
        let n = parseInt(i)
        let s = String.fromCharCode(97 + n)
        answer += s
    }
    return answer;
}