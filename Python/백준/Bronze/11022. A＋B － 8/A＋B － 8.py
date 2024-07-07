list = []
t = int(input())
for i in range(t):
    a, b = map(int, input().split())
    list.append([a,b])

for i in range(t):
    print(f"Case #{i + 1}: {list[i][0]} + {list[i][1]} = {list[i][0] + list[i][1]}")