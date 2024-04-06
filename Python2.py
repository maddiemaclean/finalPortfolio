
file1 = open("DataInput.txt", "r+")
lines = [line.strip() for line in file1.readlines()]
# ----------------- ( Helper Methods ) -----------------

def factorial(num):
    factor = 0
    for x in range(1,num+1):
        factor = factor*x
    return factor

def calcSin(angle):
        angle = angle % (2 * 3.14) 
        toReturn = 0.0
        for x in range(50):
            result = ((-1) ** x) * (angle ** (2 * x + 1)) / factorial(2 * x + 1)
            toReturn += result
        return toReturn

def calcCos(angle):
        angle = angle % (2 * 3.14) 
        toReturn = 0.0
        for x in range(50):
            result = ((-1) ** x) * (angle ** (2 * x )) / factorial(2 * x)
            toReturn += result
        return toReturn

def exponential(num):
        toReturn = 0.0
        for x in range(50):
            result = (num**x)/factorial(x)
            toReturn += result
        return toReturn
        

def poisson(num):
    a = (2.71828 ** - 50)
    b = (50 ** num) / factorial(num)
    return a * b

def calcSum(arrIn):
    sum = 0
    for i in range(arrIn):
        sum = sum + float(arrIn[i])    
    file1.write(sum)
    return sum

def avg(n):
    file1.write(calcSum(n)/n)
    return calcSum(n)/n

def max(arrIn):
    max = 0
    for i in range(arrIn):
        if arrIn[i] > max:
            max = arrIn[i]
    return max

def min(arrIn):
    min = 10
    for i in range(arrIn):
        if arrIn[i] < min:
            min = arrIn[i]
    return min

# ----------------- ( Main Program ) -----------------

i = 0

while(lines[i] != 'END'):
    numVals = int(lines[i + 1])
    splicedArr = [float(x) for x in lines[i + 2 : i + 2 + numVals]]
    if lines[i] == 'SUM':
        file1.write(sum(splicedArr) +"\n")

    elif lines[i] == 'AVG':
        file1.write(avg(splicedArr)+"\n")

    elif lines[i] == 'MAX':
        file1.write(max(splicedArr)+"\n")

    elif lines[i] == 'MIN':
        file1.write(min(splicedArr)+"\n")

    elif lines[i] == 'FXP':
        for x in splicedArr:
            file1.write(exponential(x)+", ")
        file1.write("\n")

    elif lines[i] == 'FPO':
        for x in splicedArr:
            file1.write(poisson(x)+", ")
        file1.write("\n")

    elif lines[i] == 'FSN':
        for x in splicedArr:
            file1.write(calcSin(x)+", ")
        file1.write("\n")

    elif lines[i] == 'FCS':
        for x in splicedArr:
            file1.write(calcCos(x)+", ")
        file1.write("\n")
