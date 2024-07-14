import sys

result_list = list()

while True:
    try:
        a, b = sys.stdin.readline().split()
        if a == "" or b == "":
            break
        result_list.append(int(a) + int(b))
    except:
        break
    
for i in result_list:
    print(i)