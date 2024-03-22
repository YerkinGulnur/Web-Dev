a=int(input())
cnt=0
for i in range(1, a):
    if a%i==0 and i!=1:
        cnt=i
        break
print(cnt)