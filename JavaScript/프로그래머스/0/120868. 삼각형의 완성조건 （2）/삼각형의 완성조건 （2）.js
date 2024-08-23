function solution(sides) {
    var answer = 0;
    let n_set = new Set();
    sides.sort((a,b) => a - b)
    for(let i = sides[1] - sides[0] + 1; i <= sides[1]; i++) {
        n_set.add(i)
    }
    for(let i = sides[1]+ 1; i < sides[0] + sides[1]; i++) {
        n_set.add(i)
    }
    
    answer = n_set.size
    return answer;
}