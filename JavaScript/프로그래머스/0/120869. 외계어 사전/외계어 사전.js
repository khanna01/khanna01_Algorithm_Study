function solution(spell, dic) {
    var answer = 2;
    let n = 0;
    for(let i of dic) {
        n = 1
        for(let j of spell) {
            if(i.includes(j)) { 
                if(i.indexOf(j) === i.lastIndexOf(j)) continue;
            } else {
                n = 0;
            }
        }
        if(n === 1) answer = 1
    }
    return answer;
}