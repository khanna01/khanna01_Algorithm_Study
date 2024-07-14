import sys

t = int(input())
result_list = list()

for _ in range(t):
    a, b = map(int, sys.stdin.readline().split())
    result_list.append(a + b)

for result in result_list:
    print(result)