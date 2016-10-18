class Car(object):
    def __init__(self,price,speed,fuel,mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        if price > 10000:
            self.tax = 0.15
        else:
            self.tax = 0.12

        self.display_all()

    def display_all(self):
        print "\t\t\bPrice: ${0.price}\n\
               Speed: {0.speed}\n\
               Fuel: {0.fuel}\n\
               Mileage: {0.mileage}\n\
               Tax: {0.tax}\n".format(self)




if __name__ == "__main__":
    car1 = Car(2000, "35mph", "Full", "10mpg")
    car2 = Car(11000, "130mph", "Empty", "20mpg")
    car3 = Car(5000, "65mph", "Half Full", "22mpg")
    car4 = Car(7000, "50mph", "Full", "35mpg")
    car5 = Car(100000, "200mph", "Full", "15mpg")
    car6 = Car(1500, "45mph", "Half Full", "11mpg")

    # car1.display_all()
    # print ""
    # car2.display_all()
    # print ""
    # car3.display_all()
    # print ""
    # car4.display_all()
    # print ""
    # car5.display_all()
    # print ""
    # car6.display_all()
