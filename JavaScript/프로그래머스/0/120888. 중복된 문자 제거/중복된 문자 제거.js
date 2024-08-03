function solution(my_string) {
    var answer = '';
    let my_array = my_string.split('')
    let tmp = []
    for(let i of my_array) {
        if(!tmp.includes(i)) tmp.push(i)
    }
    answer = tmp.join('')
    return answer;
}