list = list(map(int, input().split()))

def secondMax(list):
    list.sort()
    print(list[1])
            
secondMax(list)