import sys
import math

x, y = map(int, sys.stdin.readline().split())
if x != 1:
    y -= 0.99

result = math.ceil(x * y)

print(result)
