function solution(board) {
    var answer = 0;
    let answer_array = []
    for(let i = 0; i < board.length; i++) {
        answer_array.push([])
        for(let j = 0; j < board[0].length; j++) {
            answer_array[i][j] = 0
        }
    }
    
    for(let x = 0; x < board.length; x++) {
        for(let y = 0; y < board[0].length; y++) {
            if(board[x][y] === 0) continue;
            for(let i = x - 1; i <= x + 1; i++) {
                for(let j = y - 1; j <= y + 1; j++) {
                    if(i >= 0 && i < board.length && j >= 0 && j < board[x].length)  {
                        answer_array[i][j] = 1; 
                    }
                }
            }
        }
    }
    for(let i of answer_array) {
        for(let j of i) {
            if(j === 0) answer += 1
        }
    }
    return answer;
}