"""
Naive algorithm for Pattern Searching

    Difficulty Level : Easy
    Last Updated : 16 Aug, 2021

Given a text txt[0..n-1] and a pattern pat[0..m-1], write a function search(char pat[], char txt[]) that prints all occurrences of pat[] in txt[]. You may assume that n > m. 
Examples: 

Input:  txt[] = "THIS IS A TEST TEXT"
        pat[] = "TEST"
Output: Pattern found at index 10

Input:  txt[] =  "AABAACAADAABAABA"
        pat[] =  "AABA"
Output: Pattern found at index 0
        Pattern found at index 9
        Pattern found at index 12
"""

def computeLPS(pat,lpat,lps):
    pass

def cerca_KMP(txt,pat):
    lpat = len(pat)
    ltxt = len(txt)
    lps = [0]*lpat  
    #index del path
    j = 0          
    #preprocessam el 
    computeLPS(pat,lpat,lps)

    i=0
    while i < ltxt:
        if pat[j] == txt[i]:
            i += 1
            j += 1
        if j== lpat:
            print ("trobat un patro a " + str(i-j))
            j = lps[j-1]

        # mismatch after j matches
        elif i < ltxt and pat[j] != txt[i]:
            # Do not match lps[0..lps[j-1]] characters,
            # they will match anyway
            if j != 0:
                j = lps[j-1]
            else:
                i += 1

def computeLPS(pat,lpat,lps):
    #ens donen una array buida de longitud del patro cercat
    len = 0 # longitud del més llarg prefix

    lps[0]  #sempre serà zero
    i = 1
    while i < lpat:
        if pat[i]==pat[len]:
            len += 1
            lps[i] = len
            i += 1
        else:
            if len !=0:
                len=lps[len-1]
            else:
                lps[i] = 0
                i += 1
        #el bucle calcula lps[i] per i=1 fins 
        print(i,":",lps)
    pass   

def cerca_patro(txt,pat):
    lpat = len(pat)
    ltxt = len(txt)
    #print(lpat)
    #print(ltxt)
    for i in range(ltxt - lpat + 1):
        #print(i)
        trobat = 0
        while (trobat!=lpat) and (txt[i+trobat] == pat[trobat]):
            #print("trobada semblança a",i, ": ",txt[i+trobat],pat[trobat])
            trobat +=1
        if trobat == lpat:
            print("s'ha trobat el patró a la posició: ",i)
"""
txt = "THIS IS A TEST TEXT"
pat = "TEST"
print(txt)
print(pat)
cerca_patro(txt,pat)

txt =  "AABAACAADAABAABA"
pat =  "AABA"
print(txt)
print(pat)
cerca_patro(txt,pat)
"""
print("Mostra cas especial")
txt = "AAAAABAAAB" 
pat = "ABCDABC"
print(txt)
print(pat)
cerca_KMP(txt,pat)




"""
What is the best case? 
The best case occurs when the first character of the pattern is not present in text at all.

txt[] = "AABCCAADDEE";
pat[] = "FAA";

The number of comparisons in best case is O(n). 

What is the worst case ? 
The worst case of Naive Pattern Searching occurs in following scenarios. 
    1) When all characters of the text and pattern are same. 
    
        txt[] = "AAAAAAAAAAAAAAAAAA";
        pat[] = "AAAAA";

    2) Worst case also occurs when only the last character is different. 
    
        txt[] = "AAAAAAAAAAAAAAAAAB";
        pat[] = "AAAAB";

The number of comparisons in the worst case is O(m*(n-m+1)). 
Although strings which have repeated characters are not likely to appear in English text, 
they may well occur in other applications (for example, in binary texts). 
The KMP matching algorithm improves the worst case to O(n). 
We will be covering KMP in the next post. 
Also, we will be writing more posts to cover all pattern searching algorithms and data structures. 
"""