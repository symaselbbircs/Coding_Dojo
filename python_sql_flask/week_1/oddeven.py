def oddeven():
    for num in range(1,2001):
        print "Number is", str(num) + "." ,
        if num % 2 == 0:
            print "This is an even number"
        else:
            print "This is an odd number"

oddeven()
