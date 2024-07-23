const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    num = parseInt(input)
    for(let i = 0; i < num; i++) {
        let answer = '';
        for(let j = num-i; j < num+1; j++) {
            answer += "*"
        }
        console.log(answer);
    }
});