import math
import sys

t = int(input())
result_list = []

for i in range(t):
    a, b = map(int, sys.stdin.readline().split())
    gcd = math.gcd(a,b)
    lcm = gcd * a//gcd * b//gcd
    result_list.append(lcm)
    
for i in result_list:
    print(i)