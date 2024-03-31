# len function

def len(list):
    count = 0
    for i in list:
        count += 1
    return count

print(len([0, 11, 22, 12, 13, 14]))


# print function, which i made (yeah definitely me) as a write function

def write(*args, sep=' ', end='\n', file=None):
    """
    Custom function similar to print().

    Args:
        *args: Any number of positional arguments to be printed.
        sep (str, optional): Separator between the arguments (default is ' ').
        end (str, optional): String appended after the last value, also defaults to a newline.
        file (file object, optional): A file-like object where the output will be written. If None, sys.stdout will be used (default is None).
    """
    if file is None:
        import sys
        file = sys.stdout

    # Convert all arguments to strings and join them with the separator
    output = sep.join(map(str, args)) + end
    file.write(output)

write('hello')
write('hello, from giorgi')



