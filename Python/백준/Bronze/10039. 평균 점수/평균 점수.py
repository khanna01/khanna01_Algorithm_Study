result = 0

for i in range(5):
    score = int(input())
    if score < 40:
        result += 40
    else:
        result += score
        
print(result // 5)