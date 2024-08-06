function solution(cipher, code) {
    var answer = '';
    let cipher_array = cipher.split('')
    for(let i = code-1; i < cipher_array.length; i= i + code) {
        answer += cipher_array[i]
    }
    return answer;
}