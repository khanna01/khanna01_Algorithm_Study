import sys

hour, minute = map(int, sys.stdin.readline().split())
time = int(sys.stdin.readline())

total = hour * 60 + minute + time

if total // 60 > 23:
    result_hour = total // 60 - 24
else:
    result_hour = total // 60
    
result_minute = total % 60

print(f"{result_hour} {result_minute}")