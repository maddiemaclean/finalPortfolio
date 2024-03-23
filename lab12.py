multiple = lambda x: x*2
bigVal = lambda x, y: y if x < y else x if x > y else x
evenOrOdd = lambda x: x % 2 != 0 and x > 0
firstVowel = lambda x: x[0] in ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']
middleChar = lambda x: x[len(x)//2] if len(x) %2 == 0 else x[len(x)//2]

print(multiple(3))

print(bigVal(2,3))
print(bigVal(1,1))
print(bigVal(3,2))

print(evenOrOdd(3))
print(evenOrOdd(2))

print(firstVowel("Our"))
print(firstVowel("No"))

print(middleChar("Testing"))
print(middleChar("eat"))

numbers = [8, 10, 7.5]
result = map(lambda x: x*2, numbers)
print(list(result))

words = ["Hello!", "CompSci2613", "Lab-12"]
result2 = map(middleChar, words)
print(list(result2))

moreNumbers = [-15, -4, 0, 4, 23, 64, 101, 104, 123]
filtered = filter(evenOrOdd, moreNumbers)
print(list(filtered))

names = ["alice", "bob", "Carl", "daisy", "Earl"]
filtered2 = filter(firstVowel,names)
print(list(filtered2))
