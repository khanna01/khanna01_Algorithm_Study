function solution(my_string) {
    var answer = 0;
    let n_string = '' 
    let n_array = []
    for(let i of my_string) {
        if(parseInt(i) || parseInt(i) === 0) {
            n_string += i
        } else {
            if(n_string) n_array.push(parseInt(n_string))
            n_string = ''
        }
    }
    if(n_string) n_array.push(parseInt(n_string))
    for(let i of n_array) {
        answer += i
    }
    return answer;
}