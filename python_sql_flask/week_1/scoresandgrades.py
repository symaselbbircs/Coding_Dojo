def scores(grade_num):
    if grade_num >= 90:
        grade = "A"
    elif grade_num >= 80:
        grade = "B"
    elif grade_num >= 70:
        grade = "C"
    elif grade_num >= 60:
        grade = "D"
    else:
        grade = "F"
    return grade

def getgrades(count):
    print "Scores and Grades"
    for i in range(0,count):
        is_int = False
        while not is_int:
            try:
                print "Score:",
                grade = int(raw_input())
                is_int = True
            except ValueError:
                print "Oops! That's not a number! Please try again"
        print "Your grade is {}".format(scores(grade))
    print "End of Program. Bye!"

getgrades(10)
