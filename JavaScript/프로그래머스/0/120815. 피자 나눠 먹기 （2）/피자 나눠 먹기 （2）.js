function solution(n) {
    var answer = 0;
    let gcd = 0;
    let x = n;
    let y = 6;
    for(;;) {
        if(x % y === 0) {
            gcd = y
            break
        } else if(y % x === 0) {
            gcd = x
            break
        } else if(x > y) {
            x %= y
        } else {
            y %= x
        }
      }
    answer = Math.floor(n * 6 / gcd / 6) 
    return answer;
}