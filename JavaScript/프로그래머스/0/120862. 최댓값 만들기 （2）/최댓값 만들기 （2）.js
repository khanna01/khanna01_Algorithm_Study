function solution(numbers) {
    var answer = 0;
    let p_array = numbers.filter(value => Math.sign(value) === 1 || Math.sign(value) === 0).sort((a,b) => b-a)
    let m_array = numbers.filter(value => Math.sign(value) === -1 || Math.sign(value) === 0).sort((a,b) => b-a)

    if(p_array.length === 0) answer = m_array[0] * m_array[1]
    else if(m_array.length === 0) answer = p_array[0] * p_array[1]
    else if(p_array.length === 1 && m_array.length === 1) answer = m_array[0] * p_array[0]
    else if(p_array[0] * p_array[1] > m_array[0] * m_array[1]) answer = p_array[0] * p_array[1]
    else answer = m_array[0] * m_array[1]
    return answer;
}