function solution(my_string, num1, num2) {
    var answer = '';
    let tmp = '';
    str_array = my_string.split('')
    tmp = str_array[num1];
    str_array[num1] = str_array[num2];
    str_array[num2] = tmp;
    answer = str_array.join('')
    return answer;
}