import sys

point_list = []
x_list = set()
y_list = set()
    
for i in range(3):
    input_list = list(map(int, sys.stdin.readline().split()))
    point_list.append(input_list)
    x_list.add(input_list[0])
    y_list.add(input_list[1])

for i in list(x_list):
    for j in list(y_list):
        if [i, j] not in point_list:
            print(f"{i} {j}")