import turtle

cursor = turtle.Turtle()
userInput = turtle.textinput("userInput", "Enter the what shape you would like the turtle to draw: ")
colorInput = turtle.textinput("colorInput","Enter the color you want your shape to be")

if userInput == "Circle" or userInput == "circle":
        sizeInput = int(turtle.textinput("sizeInput","Enter the size you want your circle to be"))
        cursor.fillcolor(colorInput)
        cursor.begin_fill()
        cursor.circle(sizeInput)
        cursor.end_fill() 
        cursor.hideturtle()     
        turtle.done() 

elif userInput == "Square" or userInput == "square":
        sizeInput = int(turtle.textinput("sizeInput","Enter the size you want your square to be"))
        cursor.fillcolor(colorInput)
        cursor.begin_fill()
        for i in range(4):
            cursor.forward(sizeInput)
            cursor.right(90)
        cursor.end_fill()
        turtle.done()

elif userInput == "Star" or userInput == "star":
        sizeInput = int(turtle.textinput("sizeInput","Enter the size you want your star to be"))
        cursor.fillcolor(colorInput)
        cursor.begin_fill()
        for x in range(18):
            cursor.forward(sizeInput)
            if x % 2 == 0:
                cursor.left(175)
            else:
                cursor.left(225)
        cursor.end_fill()
        turtle.done()

elif userInput == "Triangle" or userInput == "triangle":
    sizeInput = int(turtle.textinput("sizeInput","Enter the size you want your triangle to be"))
    cursor.fillcolor(colorInput)
    cursor.begin_fill()
    for i in range(3):
        cursor.forward(sizeInput)
        cursor.left(120)
        cursor.forward(sizeInput)
    cursor.end_fill()
    turtle.done()

elif userInput == "Spiral" or userInput == "spiral":
    cursor.fillcolor(colorInput)
    for i in range (20):
        cursor.circle(5*i)
        cursor.circle(-5*i)
        cursor.left(i)
    turtle.done()
      
else:
    print("Incorrect Input, please try again")
