# 1
def solution(text, ending):
    return True if text[-len(ending):] == ending else False # we check if the last amount of letters (endings amount) mach with ending itself

# 2
def stray(arr):
    for i in arr:
        if arr.count(i) == 1:  # we check if the current i is occuring only once and then returning it
            return i

# 3
def is_leap_year(year):
    return True if year % 4 == 0 and year % 100 != 0 or year % 400 == 0 else False # nothing to expalain just leap year logic

# 4
def triangular(n):
    if n <= 0:
        return 0
    return (n * (n + 1)) // 2  # aq matematika iyo sachiro ;d

# 5
def vowel_indices(word):
    vowel_list = []
    for o, i in enumerate(word.lower()):  
        if i in 'aeiouy':  # if the current letter is i, then:
            vowel_list.append(o + 1)  # we add its index + 1 to the  list(because indexes start at 0 we raise it up by 1)
    return vowel_list

# 6 # aman waigo drois umetesoba
def tribonacci(signature, n):
    sequence = signature[:]  # we copy the signature so we dont change it later
    while len(sequence) < n:  
        sequence.append(sum(sequence[-3:]))  # we append sequence with the sum of the last 3 digits of itself
    return sequence[:n]  # and then we return first elements berfore n

# 7
def solution(s):
    result = ''
    for char in s:
        if char.isupper():  # if space is upper it means that new word is starting so we add space before the letter itself
            result += ' ' + char 
        else:
            result += char
    return result

# 8
def camel_case(s):
    words = s.split(" ") 
    result = ""
    for word in words:
        result += word.capitalize()  # we make first letters uppercase and then add it to the result variable
    return result

# 9
def generate_hashtag(s):
    if not s: # if s is empty then return false same with if results length > 140
        return False
    words = s.split(" ") 
    result = ""
    for word in words:
        result += word.capitalize() #we add all words without spaces and then add # this sign
    if len(result) >= 140:
        return False
    return f"#{result}" 

# 10
def pig_it(text):
    result = []
    words = text.split(" ")
    for word in words:
        if "!" not in word and "?" not in word:  # Check if the word does not contain '!' or '?'
            pig_word = word[1:] + word[0] + "ay"  # Move the first letter to the end and add 'ay'
            result.append(pig_word)
        else:
            result.append(word) 
    return " ".join(result)

