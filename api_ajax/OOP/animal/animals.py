from animal import Animal

class Dog(Animal):
    def __init__(self,name, health=150):
        super(Dog,self).__init__(name,health=health)

    def pet(self):
        self.health -= 5
        return self

class Dragon(Animal):
    def __init__(self,name,health=170):
        super(Dragon,self).__init__(name, health=health)


    def fly(self):
        self.health -=10
        return self

    def displayHealth(self):
        print("This is a Dragon!")
        super(Dragon,self).displayHealth()
        return self


if __name__ == "__main__":
    fido = Dog("fido")
    fido.walk().walk().walk().run().run().pet().displayHealth()

    superdragon = Dragon("Super Dragon!")
    superdragon.walk().walk().walk().run().run().fly().fly().displayHealth()
