function solution(numbers) {
    var answer = 0;
    let num_array = numbers.sort((a,b) => b-a)
    answer = num_array[0] * num_array[1]
    return answer;
}