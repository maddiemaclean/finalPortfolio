import re
# character counter
def characterCount(stringIn):
    counter = 0
    for i in range(0,len(stringIn)):
       counter +=1 
    return counter

#repeat_letter
repeatLetter = False
def repeat_letter(stringIn):
    if len(stringIn) <= 1:
        repeatLetter = False
        return 
        
    else:
        firstChar = stringIn[0] 
        otherChars = stringIn[1:]
    
    if firstChar in otherChars:
        repeat_letter= True

    else:
        return repeat_letter(otherChars)

# first letter equal last letter
def end_start(string,string2):
    first = ""
    last = ""
    for i in range(0, len(string)):
        if [i] == 1:
           first = string[i]
    for j in range(0,len(string2)):
        if [i] == (len(string2)-1):
            last = string2[i]
    if ( first == last):
        return True
    else:
        return False

#clean token: takes away non alphabetic chars
def cleanToken(userIn):
    userIn = userIn.lower()
    pattern = r'[^A-Za-z0-9]'
    userIn = re.sub(pattern, '', userIn)
    return userIn

userIn = input("Input a sentence for statistics:")
arr = list(userIn.split(" "))

for i in range(0,len(arr)):
    cleanToken(arr[i])

finalRepChar = 0
finalEndStart = 0

for i in range(0,len(arr)):
    
    finalRepChar += repeat_letter(arr[i])
    finalEndStart += end_start(arr[i])

print('Total number of alphabetic characters: ' + characterCount(userIn))
print('Total number of words with repeated alphabetic characters:' + finalRepChar)
print('Total number of end-start letter matches:'+ finalEndStart)
