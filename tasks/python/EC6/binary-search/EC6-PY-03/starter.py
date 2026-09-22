values = [10, 20, 20, 20, 35, 50]
target = int(input())
low = 0
high = len(values) - 1
answer = -1
while low <= high:
    middle = (low + high) // 2
    if values[middle] == target:
        answer = middle
        break
    elif values[middle] < target:
        low = middle + 1
    else:
        high = middle - 1
print(answer)
