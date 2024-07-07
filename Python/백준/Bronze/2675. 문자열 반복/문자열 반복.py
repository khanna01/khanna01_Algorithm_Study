import sys

def solution(t):
    result_list = []
    for i in range(t):
        input_list = list(sys.stdin.readline().split())
        input_list[0] = int(input_list[0])
    
        result = ''
        for i in input_list[1]:
            result += i * input_list[0]
    
        result_list.append(result)

    for i in result_list:
        print(i)
    
t = int(input())
solution(t)