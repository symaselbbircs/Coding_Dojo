def count_stars(val,character = "*"):
    response = ""
    if type(val) == int:
        count = val
    else:
        count = len(val)
    for i in range(0,count):
        response += character
    return response

def draw_stars(a):
    for val in a:
        if type(val) == int:
            print count_stars(val)
        else:
            print count_stars(val,val[0].lower())

x = [4, 6, 1, 3, 5, 7, 25]
y = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
draw_stars(x)
draw_stars(y)
