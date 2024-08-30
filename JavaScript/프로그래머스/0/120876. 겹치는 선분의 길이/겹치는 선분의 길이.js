function solution(lines) {
    var answer = 0;
    let n_set = new Set()
    let m_set = new Set()
    for(let i of lines) {
        for(let j = i[0]; j < i[1]; j++) {
            if(n_set.has(j)) m_set.add(j)
            else n_set.add(j)
        }
    }
    answer = m_set.size
    return answer;
}