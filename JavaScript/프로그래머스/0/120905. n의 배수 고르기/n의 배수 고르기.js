function solution(n, numlist) {
    var answer = [];
    answer = numlist.filter((value) => value % n === 0)
    return answer;
}