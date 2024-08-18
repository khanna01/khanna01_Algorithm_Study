function solution(keyinput, board) {
    var answer = [0, 0];
    for(let i of keyinput) {
        if(i === 'left') {
            if(Math.abs(answer[0] - 1) > Math.floor(board[0]/2)) continue;
            answer[0] -= 1
        } else if(i === 'right') {
            if(Math.abs(answer[0] + 1) > Math.floor(board[0]/2)) continue;
            answer[0] += 1
        } else if(i === 'up') {
            if(Math.abs(answer[1] + 1) > Math.floor(board[1]/2)) continue;
            answer[1] += 1
        } else if(i === 'down') {
            if(Math.abs(answer[1] - 1) > Math.floor(board[1]/2)) continue;
            answer[1] -= 1
        }
    }
    return answer;
}