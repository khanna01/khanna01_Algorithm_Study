function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    var numer_1 = numer1 * denom2;
    var numer_2 = numer2 * denom1;
    var denom_1 = denom1 * denom2;
    var denom_2 = denom2 * denom1;
    var numersum = numer_1 + numer_2;
    var numer = numer_1 + numer_2;
    var gcd = 0;
    for(;;) {
      if(numersum % denom_1 === 0) {
        gcd = denom_1
        break
      } else if (denom_1 % numersum === 0){
        gcd = numersum
        break
      }
      if(numersum > denom_1) {
        numersum = numersum % denom_1
      } else {
        denom_1 = denom_1 % numersum
      }
    }
    denom_2 /= gcd
    numersum = numer / gcd
    answer.push(numersum);
    answer.push(denom_2);

    return answer;
}