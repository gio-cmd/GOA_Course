# list = [1, 21, 314, 134, 13 ,4 ,56, 7 ,8]

# def manual_pop(list, index=-1):
#     result = []
#     for i in range(len(list)):
#         if i != index:
#             result.append(list[i])
#     return result

# print(manual_pop(list, None))




# my_info = {
#     "age" : 15,
#     "name" : "giorgi",
#     "last name" : "vanishvili",
#     "height" : 170,
#     "morning routine" : {
#         7.00 : "wake up",
#         7.10 : "brush my teeth",
#         7.20 : "make my bed",
#         8.00 : "get ready for school"
#     }
# }


name = input("enter your name: ")
last_name = input("enter your last name: ")
age = input("enter your age: ")

container = {}

container[name] = name
container[last_name] = last_name
container[age] = age

search = input("enter anything: ")
print(container.get(search, "key not found"))