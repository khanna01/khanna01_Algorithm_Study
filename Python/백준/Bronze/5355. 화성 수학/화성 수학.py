t = int(input())
result_list = []

for i in range(t):
    num_list = list(input().split())
    num_list[0] = float(num_list[0])
    result = num_list[0]
    for i in num_list:
        if i == '@':
            result *= 3
        elif i == "%":
            result += 5
        elif i == "#":
            result -= 7
    result_list.append(result)

for i in result_list:
    print(f"{i:.2f}")