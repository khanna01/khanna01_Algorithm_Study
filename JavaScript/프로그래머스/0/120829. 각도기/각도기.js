function solution(angle) {
    var answer = 0;
    if(angle === 180) answer = 4;
    else if(angle === 90) answer = 2;
    else if(angle > 90) answer = 3;
    else answer = 1;
    return answer;
}