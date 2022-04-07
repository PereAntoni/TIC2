def esPalindrom(txt):
    l = len(txt) - 1
    for i in range(l):
        if (txt[i]!=txt[l]):
            print(txt,"No és palíndrom")
            return False
        l -= 1
    print(txt,"És palindrom")
    return True



esPalindrom("acbbca")
esPalindrom("acbabca")
esPalindrom("acbca")
esPalindrom("acbbcab")
esPalindrom("ii")
esPalindrom("iai")
esPalindrom("iii")
