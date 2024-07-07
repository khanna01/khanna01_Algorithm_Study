import sys

def solution(t):
    num_list = []
    result_list = []
    
    for i in range(t):
        num_list.append({1:0, 2:0, 3:0, 4:0, 5:0, 6:0})
        input_list = list(map(int, sys.stdin.readline().split()))
        result = 0
        for j in input_list:
            num_list[i][j] += 1
        
        t = 1
        for k in range(6):
            if num_list[i][k+1] == 3:
                t = 3
                result = 10000 + (k + 1) * 1000
                break
            elif num_list[i][k+1] == 2:
                t = 2
                result = 1000 + (k + 1) * 100
                break
    
        if t == 1:
            result = max(num_list[i]) * 100
        result_list.append(result)
        
    print(max(result_list))

t = int(input())
solution(t)