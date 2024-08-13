function solution(quiz) {
    var answer = [];
    for(let i of quiz) {
        let arr = i.split(' ')
        if(arr[1] === "+") {
            if(parseInt(arr[0]) + parseInt(arr[2]) === parseInt(arr[4])) answer.push("O") 
            else answer.push("X")
        } else {
            if(parseInt(arr[0]) - parseInt(arr[2]) === parseInt(arr[4])) answer.push("O") 
            else answer.push("X")
        }
    }
    return answer;
}