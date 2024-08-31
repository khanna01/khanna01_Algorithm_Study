function solution(numlist, n) {
    var answer = [];
    let n_array = numlist.map(value => value - n)
    n_array.sort((a,b) => {
        if(Math.abs(a) > Math.abs(b)) return 1
        else if(Math.abs(a) < Math.abs(b)) return -1
        else {
            if((a + n) > (b + n)) return -1
            else return 1
        }
    })
    answer = n_array.map(value => value + n)
    return answer;
}