class Bike(object):
    def __init__(self,price,max_speed):
        self.price = price
        self.max_speed = max_speed
        self.miles = 0

    def displayinfo(self):
        print "Here are your bike stats:\n\
               Price: ${}\n\
               Max Speed: {}\n\
               Miles Rode: {}".format(self.price, self.max_speed, self.miles)

    def ride(self):
        self.miles += 10
        print "Riding..."
        return self

    def reverse(self):
        if self.miles >= 5:
            self.miles -= 5
            print "Reversing..."
        else:
            print "Can't reverse!"
        return self


bike1 = Bike(200, "10mph")
bike2 = Bike(1000, "50mph")
bike3 = Bike(500, "38mph")

bike1.displayinfo()
bike2.displayinfo()
bike3.displayinfo()

for i in range(0,3):
    bike1.ride().ride().ride().reverse()
    bike2.ride().reverse().reverse().reverse()
    bike3.reverse().ride().reverse()

bike1.displayinfo()
bike2.displayinfo()
bike3.displayinfo()

for i in range(0,2):
    bike1.reverse()
    bike2.ride()
    bike3.ride()

bike1.displayinfo()
bike2.displayinfo()
bike3.displayinfo()
