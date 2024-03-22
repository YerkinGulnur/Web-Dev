a=int(input())
res=0
while a>0:
    x=a%10
    a//=10
    res*=10
    res+=x
print(res)