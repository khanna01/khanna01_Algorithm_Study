function solution(dots) {
    var answer = 0;
    let x = [];
    let y = [];
    for(let i of dots) {
        if(!x.includes(i[0])) x.push(i[0])
        console.log(x)
        if(!y.includes(i[1])) y.push(i[1])
        console.log(y)
    }
    let width = Math.max(x) - Math.min(x)
    let height = Math.max(y) - Math.min(y)
    answer = width * height
    return answer;
}