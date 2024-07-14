import sys

n = int(sys.stdin.readline().rstrip())
input_list = list(map(int, sys.stdin.readline().split()))


input_list.sort()
print(f"{input_list[0]} {input_list[len(input_list)-1]}")