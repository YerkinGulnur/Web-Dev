a=int(input())
res=0
i=0
while(a!=0):
    r=a%10
    res=res+r*pow(2, i)
    a//=10
    i+=1
print(res)