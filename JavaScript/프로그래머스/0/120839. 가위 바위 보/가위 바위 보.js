function solution(rsp) {
    var answer = '';
    const rsp_win = {
        "2":"0", "0":"5", "5":"2"
    }
    let rsp_array = rsp.split('')
    for(let i of rsp_array){
        answer += rsp_win[i]
    }
    return answer;
}