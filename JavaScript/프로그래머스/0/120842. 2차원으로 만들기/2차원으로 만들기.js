function solution(num_list, n) {
    var answer = [];
    let num = 0;
    let ind = -1;
    for(let i = 0; i < num_list.length; i++) {
      if(i % n === 0) {
        answer.push([])
        num = 0
        ind += 1
      }
      answer[ind][num] = num_list[i]
      num += 1
    }
    return answer;
}