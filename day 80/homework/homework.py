numbers1 = [1, 2, 3]
numbers2 = [3, 4, 5]
dict1 = {'a': 1, 'b': 2}
dict2 = {'b': 3, 'c': 4}

# 1

# def list_merger(list1, list2):
#     result = set(list1 + list2)
#     return list(result)

# print(list_merger(numbers1, numbers2))

# 2

# def squarer(numbers):
#     result = []
#     for i in numbers:
#         result.append(i ** 2)
#     return result

# print(squarer(numbers1))


# 3

# def only_odds(numbers):
#     result = []
#     for i in numbers:
#         if i % 2 == 1:
#             result.append(i)
#     return result

# print(only_odds(numbers1))


# 4

# def commons(num1, num2):
#     result = set()
#     for i in num1:
#         if i in num2:
#             result.add(i)
#     return list(result)
# print(commons(numbers1, numbers2))

# 5

# def no_duplicates(numbers):
#     result = set(numbers)
#     return list(result)
# print(no_duplicates([1, 1, 2, 4, 5, 1, 6]))

# 6

# def dict_merger(dictionary1, dictionary2):
#     dictionary1.update(dictionary2)
#     return dictionary1
# print(dict_merger(dict1, dict2))

# 7

# def dict_squarer(dict):
#     for i in dict:
#         dict[i] **= 2
#     return dict
# print(dict_squarer(dict1))

# 8

# def key_extractor(dict):
#     result = []
#     for i in dict:
#         result.append(i)
#     return result
# print(key_extractor(dict1))

# 9

# def frequency_counter(text):
#     words = text.split()
    
#     word_amount = {}
    
#     for word in words:
#         word_amount[word] = word_amount.get(word, 0) + 1
    
#     return word_amount
# print(frequency_counter("Hello my name is gio etc."))

# 10

# def filter_dict(dict, value):
#     filtered_dict = {}
#     for key, val in dict.items():
#         if val == value:
#             filtered_dict[key] = val
#     return filtered_dict
# print(filter_dict(dict1, 1))

# 11

# def factorial(n):
#     result = 1
#     for i in range(1, n+1):
#         result *= i
#     return result

# print(factorial(4))

# 12

# def palindrome_checker(string):
#     return string == string[::-1]  # returns true if it is palindrome else false

# print(palindrome_checker("elele"))

# 13

# def anagram(str1, str2):
#     str1 = str1.lower()
#     str2 = str2.lower()
#     for i in str1:
#         if i not in str2 or str1.count(i) != str2.count(i):
#             return False
#     return True

# print(anagram("Hello", "olloH"))

# 14

# def reverse_sentance(string):
#     string = string.split(" ")
#     return " ".join(string[::-1]) 

# print(reverse_sentance("Hello, my name is Gio!"))

# 15
# def todo_list():
#     tasks = []
#     while True:
#         print(" ")
#         print("Options")
#         print(" ")
#         print("1. add task")
#         print("2. remove task")
#         print("3. see tasks")
#         print("4. exit")
#         print(" ")

#         user_input = input("Enter a index of thing you want to do: ")

#         if user_input == '1':
#             task = input("enter a task to add: ")
#             tasks.append(task)
#             print(f"task '{task}' has been succefuly added!")
#         elif user_input == '2':
#             index = int(input("Enter the index of the task you want to delete: ")) - 1
#             if 0 <= index < len(tasks):
#                 removed_task = tasks.pop(index)
#                 print(f"Task '{removed_task}' removed.")
#             else:
#                 print("Invalid index. Please enter a valid index.")
#         elif user_input == '3':
#             if tasks:
#                 print("Tasks:")
#                 for i, element in enumerate(tasks):
#                     print(f"{i + 1}, {element}")
#             else:
#                 print("no tasks available")
#         elif user_input == '4':
#             print("Good bye")
#             break
#         else:
#             print("Incorrect input")

# todo_list()

# 16

# def dict_maker(lis1, lis2):
#     result = dict()
#     for i in range(len(lis1)):
#         result[lis1[i]] = lis2[i]
#     return result
# print(dict_maker(numbers1, numbers2))

# 17

# def key_searcher(dict, key):
#     for i in dict:
#         if i == key:
#             return True
#     return False
# print(key_searcher(dict1, 'a'))

# 18

# dict3 = {
#     'a' : [1, 2, 3, 4, 5],
#     'b' : [2, 13, 13, 3, 4],
#     'g' : [1, 12, 45],
# }

# def dict_sum(dict):
#     for i in dict:
#         dict[i] = sum(dict[i])
#     return dict

# print(dict_sum(dict3))

# 19

# def filter_list(lis, value):
#     result1 = []
#     result2 = []
#     for i in lis:
#         if i < value:
#             result1.append(i)
#         else:
#             result2.append(i)
#     return [result1, result2]
# print(filter_list(numbers2, 4))

# 20

def common_elems(lis1, lis2):
    result = set()
    for i in lis1:
        if i in lis2:
            result.add(i)
    return len(result)
print(common_elems(numbers1, numbers2))