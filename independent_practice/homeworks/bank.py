balance = 0
yno = input("Hello Do You Want To Create A Bank Acount(Yes/No)?: ")

if yno.lower() == "yes":
    print("Lets Start")
else:
    print("Goodbay!")
    quit()

print("To Create An Acount You Should Enter Your Username And Password (Make Sure to confirm your password)")

name = input("Name: ")
password = input("Password: ")
c_password = input("Confirm Password: ")

while password != c_password:
    print("Passwords do not match. Please try again.")
    c_password = input("Confirm Password: ")


while password != c_password:
    print("Passwords do not match. Please try again.")
    c_password = input("Confirm Password: ")

print("Account Created Successfully!")


print("\nChoose an option:")
print("1. Display Balance")
print("2. Deposit Money")
print("3. Withdraw Money")
print("4. Exit")

choice = int(input("Enter your choice (1-4): "))

if choice == 1:
    print("Your Balance Is: $" + str(balance))
elif choice == 2:
    amount = float(input("Enter the amount to deposit: $"))
    balance += amount
    print("Your Balance Is: $" + str(balance))
elif choice == 3:
    amount = float(input("Enter the amount to withdraw: $"))
    if amount > balance:
        print("Insufficient funds. Withdrawal canceled.")
    else:
        balance -= amount
        print("Your Balance Is: $" + str(balance))
elif choice == 4:
    print("Thank you for using our banking system. Goodbye!")
    quit()
else:
    print("Invalid choice. Please enter a number between 1 and 4.")