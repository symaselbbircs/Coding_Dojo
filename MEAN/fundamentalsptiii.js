amy = personConstructor("Amy Meyers")
amy.say_name()
amy.say_something("hey what's up?")
brian = personConstructor("BNo Fashodo")
brian.say_name()
brian.say_something("Need me some spro!")

amy_ninja = ninjaConstructor("Amy Meyers", "Online Flex Program");
console.log(amy_ninja.name, amy_ninja.belt_level, amy_ninja.cohort)
amy_ninja.levelUp()
amy_ninja.levelUp()
amy_ninja.levelUp()

function personConstructor(name){
  var person = {
    name: name,
    distance_traveled: 0,
    say_name: function(){
      console.log("Hello " + person.name + "!")
    },
    say_something: function(words){
      console.log(person.name + " says, '" + words + "'")
    },
    walk: function(){
      console.log(person.name, "is walking.")
      person.distance_traveled += 3;
    },
    run: function(){
      console.log(person.name, "is running")
      person.distance_traveled += 10;
    },
    crawl: function(){
      console.log(person.name, "is crawling")
      person.distance_traveled += 1
    },
    distance: function(){
      console.log(person.name, "has moved", person.distance_traveled, "units of movement!")
    }
  };
  return person
}

function ninjaConstructor(name,cohort){
  var ninja = {
    name: name,
    cohort: cohort,
    belt_level: "yellow",
    levelUp: function(){
      var belts = {0: "yellow", 1:"red", 2: "black"}
      if(ninja.belt_level == belts[2]){
        return console.log(ninja.name + " is already the raddest, most black beltiest!")
      }
      for(var i = 0; i < 2; i ++){
        if(ninja.belt_level == belts[i]){
          ninja.belt_level = belts[i + 1];
          return console.log(ninja.name + " is now a " + ninja.belt_level + " belt!")
        }
      }
    },
    belt: function(){console.log(ninja.name + " has a " + ninja.belt_level + " belt!")}
  };
  return ninja
}
