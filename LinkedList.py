maxStudents = 20

class Student:
    def __init__(self, name, student_id):
        self.name = name
        self.student_id = student_id

class Node:
    def __init__(self, studentIn):
        self.data = studentIn
        self.prev = None
        self.next = None

class DoublyLinkedList:
    def __init__(self):
        self.head = None

    def print_ascend(self):
        current = self.head
        while current is not None:
            print("Name: " + current.data.name + ", " + "Student ID: " + str(current.data.student_id))
            current = current.next

    def print_descend(self):
        current = self.head
        while current is not None:
            if current.next is None:
                tail = current
            current = current.next
        while tail is not None:
            print("Name " + tail.data.name + ", " + "Student ID: " + str(tail.data.student_id))
            tail = tail.prev

    def length(self):
        count = 0
        current = self.head
        while current:
            count += 1
            current = current.next
        return count

    def add_student(self, student_in):
        new_node = Node(student_in)

        # if the class is at capacity, do not add student
        if maxStudents < my_list.length():
            print("Class is full")
            return

        # if the list is empty, set the incoming node as the head
        if not self.head:
            self.head = new_node

        # if the incoming node is smaller than the head, make the incoming node the new head
        elif self.head.data.student_id >= student_in.student_id:
            new_node.next = self.head
            self.head.prev = new_node
            self.head = new_node

        # if the head doesn't have anything to do with the incoming node, assigned the head to current
        else:
            current = self.head

            # if the incoming node is smaller than the next node, insert in between them
            while current.next and current.next.data.student_id < student_in.student_id:
                current = current.next

            #add to the end of the list, ( if the incoming node is bigger than all of the nodes in the list )
            if current.next is not None:
                new_node.next = current.next
                current.next.prev = new_node

            # keeps us iterating through the list
            current.next = new_node
            new_node.prev = current
    
    def remove_student(self, student_in):
    # If the class is empty, print a message
        if not self.head:
            print("The class is currently empty")
            return

        # Deals with if we need to remove the head
        if self.head.data.student_id == student_in.student_id:
            if self.head.next:
                self.head = self.head.next
                self.head.prev = None
            else:
                self.head = None
            print("Student successfully removed")
            return

        # Start iterating through the linked list
        current = self.head.next
        while current:
            if current.data.student_id == student_in.student_id:

                # Checks if we are in the middle of the list
                if current.next is not None:
                    current.prev.next = current.next
                    current.next.prev = current.prev
                    print("Student successfully removed")

                else:
                    # If we aren't in the middle, we are removing the tail
                    current.prev.next = None
                    print("Student successfully removed")
                return
            current = current.next

        # If the student ID is not found in the list
        print("Student ID not found in the list")

        
my_list = DoublyLinkedList()
student1 = Student("Student1", 100)
student2 = Student("Student2", 101)
student3 = Student("Student3", 102)
student4 = Student("Student4",1)