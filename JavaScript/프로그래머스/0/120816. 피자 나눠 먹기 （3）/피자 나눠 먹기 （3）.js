function solution(slice, n) {
    var answer = 0;
    let n1 = n;
    for(;;) {
        if(n1 === 0) break
        if(n1 <= slice) {
          answer += 1
          break 
        } else {
          answer += Math.floor(n1 / slice)
          n1 %= slice;
        }
    }
    return answer;
}
