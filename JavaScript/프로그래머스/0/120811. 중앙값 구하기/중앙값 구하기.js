function arraySort(array) {
  let array1 = array
  for(let i = 0; i < array.length; i++) {
    let temp = 0;
    for(let j = 0; j < array.length; j++) {
      if(array1[j] > array1[j+1]) {
        temp =  array1[j]
        array1[j] = array1[j+1]
        array1[j+1] = temp
      }
    }
  }
  return array1
}

function solution(array) {
    var array1 = arraySort(array)
    var ind = Math.floor(array1.length / 2)
    var answer = array1[ind];
    return answer;
}