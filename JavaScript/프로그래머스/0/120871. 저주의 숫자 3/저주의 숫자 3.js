function solution(n) {
    var answer = 0;
    let n_array = []
    for(let i = 1;; i++) {
        if(i % 3 !== 0 && !i.toString().includes('3')) n_array.push(i)
        if(n_array.length === 100) break
    }
    answer = n_array[n - 1]
    return answer;
}