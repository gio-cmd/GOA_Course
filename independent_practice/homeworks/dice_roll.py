import random 

print("HEllo Player!")
yno = input("Would You Like To Play Dice Against Computer(Yes/No)?: ")

if yno.lower() == "yes":
    print("Lets Start")
else:
    print("Goodbay!")
    quit()

player = random.randint(1, 6)
computer = random.randint(1, 6)
input("Press Enter To Roll A Dice: ")
print("You Rolled: " + str(player))

print("")

print("Now Its Computers Turn")
print("Computer Rolled and Got: " + str(computer))

print("")

if player > computer:
    print("You Won")
elif player == computer:
    print("Damn It's A Tie")
else:
    print("Computer Won")
