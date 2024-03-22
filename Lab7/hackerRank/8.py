n = int(input())
arr = map(int, input().split())
print(sorted(set(arr), reverse=True)[1])