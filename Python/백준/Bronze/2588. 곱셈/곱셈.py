def solution(a, b):
    c = 1
    sum = 0
    for i in range(2, -1, -1):
        print(a * int(b[i]))
        sum += (a * (int(b[i]) * c))
        c *= 10
    print(sum)
    
a = int(input())
b = input()
b = list(b)

solution(a, b)