function solution(numbers) {
    var answer = 0;
    let num_obj = {
        'zero': 0,
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9,
    }
    let num = numbers;
    for(const i in num_obj) {
        num = num.replaceAll(i, num_obj[i])
    }
    answer = parseInt(num)
    return answer;
}