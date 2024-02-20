from turtle import *

speed(0)
width(1)
bgcolor("green")

penup()
goto(-500, -100)
pendown()
color("skyblue")
begin_fill()

for i in range(2):
   forward(1000)
   left(90)
   forward(600)
   left(90)
end_fill()

#draw a sun 

penup()
goto(-320, 230)
pendown()
color("yellow")
begin_fill()
circle(60)
end_fill()

# draw a star

penup()
goto(300, 300)
pendown()
color("white")
begin_fill()

 
penup()
goto(150, 260)
pendown()

left(70)
forward(45)

left(70)
forward(45)

right(140)
forward(45)

left(75)
forward(45)

right(150)
forward(45)

left(75)
forward(45)

right(140)
forward(45)

left(75)
forward(45)

right(150)
forward(50)

left(75)
forward(50) 


# draw second star

penup()
goto(300, 300)
pendown()
color("white")
begin_fill()
 
penup()
goto(-120, 300)
pendown()

left(70)
forward(45)

left(70)
forward(45)

right(140)
forward(45)

left(75)
forward(45)

right(150)
forward(45)

left(75)
forward(45)

right(140)
forward(45)

left(75)
forward(45)

right(150)
forward(50)

left(75)
forward(50)


penup()
goto(-300, -100)
pendown()


left(10)


width(6)
color("black")
begin_fill()
for i in range(4):
  
  forward(130)
  left(90)
end_fill()



forward(130)
left(90)

color("red")
begin_fill()

forward(130)
right(130)

forward(115)
right(105)

forward(105)
end_fill()

#second house

penup()
goto(-0, -100)
pendown()


left(145)


width(6)
color("black")
begin_fill()
for i in range(4):
  
  forward(130)
  left(90)
end_fill()



forward(130)
left(90)

color("red")
begin_fill()

forward(130)
right(130)

forward(115)
right(105)

forward(105)
end_fill()

# third house

penup()
goto(300, -100)
pendown()


left(145)


width(6)
color("black")
begin_fill()
for i in range(4):
  
  forward(130)
  left(90)
end_fill()



forward(130)
left(90)

color("red")
begin_fill()

forward(130)
right(130)

forward(115)
right(105)

forward(105)
end_fill()





exitonclick()