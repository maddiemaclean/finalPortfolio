class Data:
    def __init__(self, letter):
        self.letter = letter
        self.frequency = 0

class LetterNode:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

class BST:
    def __init__(self):
        self.root = None

    def addNode(self, letterIn):
        letterIn = letterIn.lower()
        newLetterData = Data(letterIn)
        newLetterNode = LetterNode(newLetterData)

        # if the BST is empty
        if self.root is None:
            self.root = newLetterNode
            newLetterNode.data.frequency += 1

        else:
            self._addNodeRecursive(self.root, newLetterNode)

    def _addNodeRecursive(self, current, newLetterNode):
        # insert the node to the right side of the tree
        if newLetterNode.data.letter > current.data.letter:
            if current.right is None:
                current.right = newLetterNode
                newLetterNode.data.frequency += 1
            else:
                self._addNodeRecursive(current.right, newLetterNode)

        # insert the node to the left side of the tree
        elif newLetterNode.data.letter < current.data.letter:
            if current.left is None:
                current.left = newLetterNode
                newLetterNode.data.frequency += 1
            else:
                self._addNodeRecursive(current.left, newLetterNode)

        # update the frequency of the letter
        else:
            current.data.frequency += 1
    
    def getRoot(self):
        if self.root is None:
            print("Tree is empty")
        else:
            return self.root

# does preorder traversal
def printPreorder(root):
    if root:
        # First print the data of node
        print(root.data.letter + " " + str(root.data.frequency))
        # recur on left 
        printPreorder(root.left)
        # recur on right 
        printPreorder(root.right)

# takes all of the nodes and adds them to the BST
def treeify(listIn, bst):
    for i in listIn:
        bst.addNode(i)

my_tree = BST()
string = "TestingTestTt"
letter_list = []
for letter in string:
    letter_list.append(letter)
print(letter_list)
treeify(letter_list, my_tree)
printPreorder(my_tree.getRoot())
