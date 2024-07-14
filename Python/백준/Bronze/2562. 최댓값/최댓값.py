import sys

input_list = list()

for i in range(9):
    a = int(sys.stdin.readline().rstrip())
    input_list.append(a)
    
max = 0
index = -1
for i in range(9):
    if input_list[i] > max:
        max = input_list[i]
        index = i+1

print(max)
print(index)