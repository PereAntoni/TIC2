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

def cerca_patro(txt,pat):
    lpat = len(pat)
    ltxt = len(txt)

    for i in range(ltxt-lpat):
        trobat = 0
        while (txt[i+trobat]==pat[trobat]):
            trobat +=1
        if trobat == lpat:
            print("s'ha trobat el patró a la posició: ",i)

txt = "THIS IS A TEST TEXT"
pat = "TEST"