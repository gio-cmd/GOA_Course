acc = {
    "full name" : "giorgi vanishvili",
    "address" : "gori, georgia",
    "mail" : "vanishvilig1org2@gmail.com" ,
    "passsword" : '12345678'
}

for key, value in acc.items():
    print(key + " " + value)


def manual_items(dict):
    result = []
    for i in dict:
        result.append([i, dict[i]])
    return result

print(manual_items(acc))

def manual_get(dict, input, default):
    if input not in dict:
        return default
    for key, value in dict.items():
        if key == input:
            return value
        
