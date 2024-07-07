import sys

num_dict = {1:0, 2:0, 3:0, 4:0, 5:0, 6:0}

num = list(map(int, sys.stdin.readline().split()))
for i in num:
    num_dict[i] += 1
    
t = 1
for i in range(6):
    if num_dict[i+1] == 3:
        t = 3
        print(10000 + (i + 1) * 1000)
        break
    elif num_dict[i+1] == 2:
        t = 2
        print(1000 + (i + 1) * 100)
        break

if t == 1:
    for i in range(6, 1, -1):
        if num_dict[i] == 1:
            print(i * 100)
            break