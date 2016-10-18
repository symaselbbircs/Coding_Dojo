def oddnumbers():
    for num in range(0,1001):
        if num % 2 == 1:
            print "Odd number", num

oddnumbers()

def multiples(multiple):
    for num in range(multiple,1000001,multiple):
        print num

multiples(5)
