class MathDojo(object):
    def __init__(self):
        self.total = 0;

    def add(self,x, *args):
        if args:
            for arg in args:
                if type(arg) == tuple or type(arg) == list:
                    self.total += sum(arg)
                else:
                    self.total += arg
        self.total += x
        return self

    def subtract(self,x,*args):
        if args:
            for arg in args:
                if type(arg) == tuple or type(arg) == list:
                    self.total -= sum(arg)
                else:
                    self.total -= arg
        self.total -= x
        return self

    def show_total(self):
        print "{0.total}".format(self)
        return self


if __name__ == "__main__":
    a = MathDojo()
    b = MathDojo()
    a.add(2).add(2,[2,2,2.4,2]).subtract(4,[12,4]).add(8).show_total()
    b.add(2).add(2, 5).subtract(3, 2).show_total()
