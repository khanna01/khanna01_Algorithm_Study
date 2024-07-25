function solution(hp) {
    var answer = 0;
    let hp_1 = hp
    let ant = [5, 3, 1];
    for(let i of ant) {
        answer += Math.floor(hp_1 / i)
        hp_1 %= i
    }
    return answer;
}