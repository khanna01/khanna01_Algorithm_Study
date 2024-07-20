function solution(n) {
    var answer = 0;
    var n1 = n;
    for(;;) {
        if(n1 % 7 === 0) {
          answer += Math.floor(n1 / 7);
          break
        } else if(n1 <= 7) {
            answer += 1;
            break;
        } else {
            answer += Math.floor(n1 / 7);
            n1 %= 7;
        }
    }
    return answer;
}