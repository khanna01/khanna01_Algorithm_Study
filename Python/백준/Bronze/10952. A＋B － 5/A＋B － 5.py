import sys

result_list = list()

while True:
    try:
        a, b = map(int, sys.stdin.readline().split())
        if a == 0 and b == 0:
            break
        result_list.append(a + b)
    except:
        break
    
for i in result_list:
    print(i)