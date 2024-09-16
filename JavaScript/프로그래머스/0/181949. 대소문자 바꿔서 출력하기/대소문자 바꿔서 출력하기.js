const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    answer = ''
    str = input[0];
    for(let i of str) {
        if(i.charCodeAt(0) <= 90) {
            answer += i.toLowerCase()
        } else {
            answer += i.toUpperCase()
        }
    }
    console.log(answer)
});