function solution(array) {
    let num_object = {}
    for(let i of array) {
          num_object[i] = 0;
    }
    for(let i of array) {
        num_object[i] += 1;
    }
    let value = 0;
    var answer = 0;
    for(let key in num_object) {
      if(num_object[key] === value) {
        answer = -1;
        value = num_object[key]
      } else if(num_object[key] > value){
        answer = key
        value = num_object[key]
      } 
    }
    answer = parseInt(answer)
    return answer;
}
