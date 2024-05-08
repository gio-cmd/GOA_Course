# 1

def keys_in_list(dict1):
    list = []
    for key in dict1:
        list.append(key)
    return sorted(list)

# 2

def max_or_min(dict1):
    max_key = max(dict1, key=dict1.get)
    min_key = min(dict1, key=dict1.get)
    return f"max key is {max_key} and min key is {min_key}"


# 3

def combining_items(dict1,dict2):
    dict1.update(dict2)
    return dict1

# 4

def get_value(dict1, value, default):
    return dict1.get(value, default)
    
# 5

def pop_and_return(dict1, input):
    return dict1.pop(input)


# 6

def manual_key(dict1):
    list = []
    for i in dict1:
        list.append(i)
    return list

# 7

def manual_values(dict1):
    list = []
    for i in dict1:
        list.append(dict1[i])
    return list

# 8

def manual_items(dict1):
    list = []
    for i in dict1:
        list.append([i, dict1[i]])
    return list

# 9

def manual_get(dict1, input, default):
    if input not in dict1:
        return default
    else:
        return dict1[input]


# 10

def manual_pop(dict1, input):
    result = dict()
    for i in dict1:
        if i != input:
            result[i] = dict1[i]
    return result
