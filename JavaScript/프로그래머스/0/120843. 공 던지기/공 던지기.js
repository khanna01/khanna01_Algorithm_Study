function solution(numbers, k) {
    var answer = 0;
    let num = 0;
    for(let i = 0; i < k-1; i++) {
        num += 2
        if(num >= numbers.length -1) {
            num %= numbers.length
        }
    }
    answer = numbers[num]
    return answer;
}