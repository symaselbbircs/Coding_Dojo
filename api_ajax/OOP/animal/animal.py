class Animal(object):
    def __init__(self,name, health=100):
        self.name = name
        self.health = health

    def walk(self):
        self.health -= 1
        return self

    def run(self):
        self.health -= 5
        return self

    def displayHealth(self):
        print "{0.name}: {0.health}".format(self)
        return self


if __name__ == "__main__":
    animal1 = Animal("animal")
    animal1.walk().walk().walk().run().run().displayHealth()
    # animal1.walk().walk().walk().run().run().fly().displayHealth()
