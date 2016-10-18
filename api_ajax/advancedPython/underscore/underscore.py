class Underscore(object):
    def map(self,a,callback):
        tmp = []
        for num in a:
            tmp.append(callback(num))
        tmp
        return tmp

    def reduce(self,a,callback):
        return callback(a)

    def find(self,a,callback):
        tmp = None
        for num in range(0,len(a)):
            if callback(a[num]):
                tmp = num
                break
        return tmp

    def filter(self,a,callback):
        tmp =[]
        for num in a:
            if callback(num):
                tmp.append(num)
        return tmp
        # print callback(row) for row in x
    def reject(self,a,callback):
        tmp =[]
        for num in a:
            if not callback(num):
                tmp.append(num)
        return tmp
# you just created a library with 5 methods!
# let's create an instance of our class
if __name__ == "__main__":
    _ = Underscore() # yes we are setting our instance to a variable that is an underscore
    evens = _.filter([1, 2, 3, 4, 5, 6], lambda x: x % 2 == 0)
    print "Evens only: ", evens

    odds_filter = _.filter([1, 2, 3, 4, 5, 6], lambda x: x % 2 == 1)
    print "Odds only: ", odds_filter

    mapping = _.map([1,2,3,4], lambda x: x * 3)
    print "Mapped x * 3: ", mapping

    odds_reject = _.reject([1, 2, 3, 4, 5, 6], lambda x: x % 2 == 0)
    print "Odds only using reject method: ", odds_reject

    red = _.reduce([1,2,3,4,5], lambda x: sum(x))
    print "Reduce to 1 value: ", red, "\n___________"

    find_false = _.find([1,2,3,4,5,6,7,8], lambda x: x == 9)
    print "For list [1,2,3,4,5,6,7,8]\n_____________"
    print "Find position for x == 9: ", find_false

    find_true = _.find([1,2,3,4,5,6,7,8], lambda x: x == 6)
    print "Find position for x == 6: ", find_true
