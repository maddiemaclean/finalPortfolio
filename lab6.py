import re
with open("input.txt") as f: # one way of doing fileIO in Python
    file = f.read().replace("\n", " ") # creates a big string of the entire file

# only words of a given length
def givenLength( stringIn,lengthIn): 
    list = stringIn.split() #splits the file string into a list with each word taking up it's own slot.
    toReturn = ""
    for i in range(0,len(list)): # iterates through the entire list
        if(len(list[i]) == lengthIn):
            toReturn += list[i] + " "
    return toReturn

# longest words
def longestWords(stringIn): # a basic find max function in Python and adds them to a new list to return
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
        word = cleanToken(word) # uses the cleanToken function to make every letter lowercase and removes special characters
        for element in set(word): # iterates over each char in the word.
            countOfChar = word.count(element)
            if countOfChar > maxCount:
                maxCount = countOfChar
                mostCommonLetter = element

    return mostCommonLetter

#clean token: takes away non alphabetic chars

def cleanToken(userIn):
    userIn = userIn.lower() # makes every letter lower case
    pattern = r'[^A-Za-z0-9]' # removes special characters
    userIn = re.sub(pattern, ' ', userIn) # applies the pattern to the string passed in
    return userIn

print(givenLength(file,5))
print(longestWords(file))
print(commonLetter(file))
