function solution(num_list) {
    var answer = [];
    let even = 0;
    let odd = 0;
    for(let i of num_list){
      if(i % 2 === 0){
        even += 1
      } else {
        odd += 1
      }
    }
    answer.push(even)
    answer.push(odd)
    return answer;
}