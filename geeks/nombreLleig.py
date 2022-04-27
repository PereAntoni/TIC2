
def maxDiv(n,d):
    #divideix al màxim un nombre n per d
    while n%d==0:
        n = n/d
    return n

def esLleig(n):
    nombre=n
    n = maxDiv(n,2)
    n = maxDiv(n,3)
    n= maxDiv(n,5)
    if n==1:
        return True
    else:
        return False

def nLleig(l):
    #mostra els primers l nombres lletjos
    i = 1       #nombre que calculam
    count = 1   #total de nombres lletjos
    while l > count:
        i += 1
        if esLleig(i):
            print(count,":",i)
            count +=1
    return i #el nombre que està a la posició l dels lletjos

def nLleig2(n):
    #declaram array 
    ugly = [0]*n
    ugly[0]=1
    #punters dels multiplicadors
    n2=n3=n5=0
    s2=2
    s3=3
    s5=5
    for i in range(1,n):
        ugly[i]=min(s2,s3,s5)
        print(ugly[i])
        if ugly[i]==s2: 
            n2+=1
            s2=ugly[n2]*2
        if ugly[i]==s3: 
            n3+=1
            s3=ugly[n3]*3
        
        if ugly[i]==s5: 
            n5+=1
            s5=ugly[n5]*5
        
        







nLleig2(1500)