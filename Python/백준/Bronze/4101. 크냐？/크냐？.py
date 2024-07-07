a, b = map(int, input().split())
list = []

while a != 0 and b != 0:
    if a > b: list.append("Yes")
    else: list.append("No")
    a, b = map(int, input().split())
    
for i in list:
    print(i)
    