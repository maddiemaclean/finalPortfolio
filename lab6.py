import re
with open("input.txt") as f:
    file = f.read().replace("\n", " ")
# lines = [line.strip() for line in file.readlines()]

# only words of a given length
def givenLength( stringIn,lengthIn):
    list = stringIn.split()
    toReturn = ""
    for i in range(0,len(list)):
        if(len(list[i]) == lengthIn):
            toReturn += list[i] + " "
    return toReturn

# longest words
def longestWords(stringIn):
    list = stringIn.split()
    toReturn = ""
    longWord = ""
    for i in range(0,len(list)):
        if(len(list[i]) > len(longWord)):
            toReturn =""
            longWord = list[i]
            toReturn += list[i] + ", "
        elif(len(list[i]) == len(longWord)):
            toReturn += list[i] 
    return toReturn 
# most common letter

def commonLetter(stringIn):
    words = stringIn.split()
    mostCommonLetter = ''
    maxCount = 0

    for word in words:
        word = cleanToken(word)
        for element in set(word):
            countOfChar = word.count(element)
            if countOfChar > maxCount:
                maxCount = countOfChar
                mostCommonLetter = element

    return mostCommonLetter

#clean token: takes away non alphabetic chars

def cleanToken(userIn):
    userIn = userIn.lower()
    pattern = r'[^A-Za-z0-9]'
    userIn = re.sub(pattern, ' ', userIn)
    return userIn

print(givenLength(file,5))
print(longestWords(file))
print(commonLetter(file))
