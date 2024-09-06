function solution(score) {
    var answer = [];
    let arg_array = score.map((value) => (value[0] + value[1]) / 2)
    let arg = score.map((value) => (value[0] + value[1]) / 2)
    let rank_obj = {}
    arg.sort((a,b) => b-a)
    let rank = 1
    for(let i = 0; i < arg.length; i++) {
        if(i === 0) {
            rank_obj = { [arg[i]] : rank}
            rank++
            continue
        }
        if(arg[i-1] === arg[i]) {
            rank++;
        } else {
            let obj = {...rank_obj}
            rank_obj = { ...obj, [arg[i]]: rank}
            rank++;
        }
    }
    arg_array.map(value => answer.push(rank_obj[value]))
    return answer;
}