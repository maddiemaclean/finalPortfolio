class Student:
    def __init__(self, name, student_id):
        self.name = name
        self.student_id = student_id

class Node:
    def __init__(self, next=None, prev=None, data=None):
        self.data = data
        self.next = next
        self.prev = prev

class LinkedList:
    def __init__(self):
        self.head = None

classList = LinkedList()

# num_students – returns the current number of students registered in the course.

def num_students(self):
    size = 0
    current = self.head

    while current is not None:
        size += 1
        current = current.next

    return size

# print_ascend – return a string containing all students in the class (name + id) in ascending order of id. String should be readable.

def print_ascend(headIn):
    current = headIn
    while current is not None:
        print("Name" + current.data.name + " " + "Student ID: " + current.data.student_id)
        current = current.next

# print_descend – return a string containing all students in the class (name + id) in descending order of id. String should be readable 

def print_descend(headIn):
    current = headIn
    while current is not None:
        if current.next is None:
            tail = current
        current = current.next
    while tail is not None:
        print("Name" + tail.data.name + " " + "Student ID: " + tail.data.student_id)
        tail = tail.prev

# add_student – makes a Student object and adds it to the course in order of student ID.

def add_student(self,studentIn):
     newNode = Node(studentIn)
     current = self.head
     if num_students(self) > maxStudents:
        print("Error: Class is at capacity")

    # if the list is empty 
     if classList.head is None:
        classList.head = newNode
        print("Student successfully added")
        return

     while current is not None:

        # if the newNode is the new head
        if newNode.data.student_id > self.head.data.student_id:
            newNode.next = self.head
            self.head.prev = newNode
            self.head = newNode
            print("Student successfully added")
            return

        # if adding at the end of the list
        elif current.next is None:
            current.next = newNode
            newNode.prev = current
            print("Student successfully added")
            return 

        #adding in the middle of the list
        elif current.data.student_id > current.next.data.student_id:
            newNode.next = current.next
            newNode.prev = current
            current.next.prev = newNode
            current.next = newNode
            print("Student successfully added")
            return

        current = current.next

def removeStudent(self,studentIn):
    current = self.head
    while current is not None:
        #If we need to remove the head
        if studentIn.data.student_id == classList.head.data.student_id:
            if self.head.next is None:
                self.head = None

            else:
                self.head = self.head.next
                self.head.prev = None

        #Remove from the middle
        if studentIn.data.student_id == current.data.student_id:
            current.prev.next = current.next
            current.next.prev = current.prev
            current.next = None
            current.prev = None

        #Remove from the end
        if current.next is None:
            if self.head.next is None:
                self.head = None
            else:
                current.prev.next = None
                current.prev = None
        current = current.next

print("Enter class name and max number of students separated by the ENTER key")
className = input("")
maxStudents = int(input(""))

print("Please make a selection for the course CS2613")
print("     1: Add Student")
print("     2: Remove Student")
print("     3: Print Number of Students")
print("     4: Class List in Ascending Order")
print("     5: Class List in Descending Order")
print("     0: Exit Program")

numIn = int(input(""))
while numIn != 0:
    if numIn ==1:
        print("To add: Input student name and student number (separated by ENTER key)")
        studentName = input("")
        studentNumber = input("")
        studentIn = Student(studentName,studentNumber)
        add_student(classList,studentIn)

    if numIn ==2:
        print("To remove a student, please enter their IDNumber: ")
        studentIDIn = input("")
        removeStudent(studentIDIn)

    if numIn ==3:
        num_students(classList.head)
    
    if numIn ==4:
        print_ascend(classList.head)

    if numIn ==5:
        print_descend(classList.head)

    elif numIn > 5 and numIn < 0: 
        print("Invalid command, please try again")
    print("Please enter your next command")
    numIn = int(input(""))
