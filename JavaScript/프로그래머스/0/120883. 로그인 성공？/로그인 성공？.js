function solution(id_pw, db) {
    var answer = '';
    for(let i of db) {
        if(i[0] === id_pw[0]) {
            if(i[1] === id_pw[1]){
                answer = "login"
                break
            } else {
                answer = "wrong pw"
                break
            }
        } else {
            answer = "fail"
        }
    }
    return answer;
}