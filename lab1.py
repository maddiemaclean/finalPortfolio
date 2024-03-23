------------------- ( Part One ) -------------------

name = input("Please enter your name:") # Example of userInput in Python
age = input("Please enter your age:")
tryAgain = int(1)
ageMath = 16 - int(age)
ageMath2 = int(age)-16
while tryAgain == 1:
    if  int(age) >=0 and int(age)<=122:
        if int(age) == 16:
            print("Congrats! " + name + " can get their driver's license now")
            tryAgain = 0
        elif int(age) <= 15 and int(age)>=0:
            print(name +"must wait "+ str(ageMath) +" more years to get a driver's license")
            tryAgain = 0
        elif int(age) > 16 and int(age) <= 122:
            print(name +" has been eligible for a driver's license for "+ str(ageMath2) +"years")
            tryAgain = 0
    else:
        age = input("Error with age, please enter your age:")
        ageMath = 16 - int(age)
        ageMath2 = int(age)-16
        tryAgain = 1

# NOTE: in python, variables are dynamically typed, meaning they don't have a type (int,string etc) so with userInput you need to cast them

------------------- ( Part Two)  -------------------

import math
def av (val): # this function takes the absolute value of a number
    if val >= 0:
        return 0
    else:
        return -val 
        
a = input("Please enter your 'a' variable:")
b = input("Please enter your 'b' variable:")

while a !='X':
    inside = ((float(a) - 1)**5)-(float(b) + 1)
    if inside < 0:
        inside = (av(inside))

    print("Result:" + str(math.sqrt(inside)))
    a = (input("Please enter your 'a' variable:"))
    b = (input("Please enter your 'b' variable:"))
    if a == 'X':
        break
