function vehicleConstructor(name, wheels, pass, speed){
  var self = this;
  var distance_traveled = 0;
  var updateDistanceTravelled = function(){
    distance_traveled = distance_traveled + speed
    console.log("The " + name + " traveled " + speed + " more miles")
  }
  var VINGenerator = function(){
    return Math.round(Math.random()*99999999999999999)
  }
  this.p = undefined;
  this.type = undefined;
  this.speed = speed;
  this.name = name;
  this.wheels = wheels;
  this.passengers = pass;
  this.move = function(){
    updateDistanceTravelled();
    if(this.noise){
      console.log("'" + this.noise + "'")
    }
    return this
  }
  this.checkMiles = function(){
    console.log(name + "'s total miles: " + distance_traveled)
    return this
  }
  this.VIN = VINGenerator();
}

vehicleConstructor.prototype.passengerLogic = function(){
  if(this.passengers == 0){
    console.log("This vehicle can't pick up passengers!")
  }
  else if(this.name === "bus"){
    if(this.type === "pickup"){
      console.log("The " + this.name + " has picked up " + this.p + " more passengers.")
      this.passengers += this.p;
      console.log("The " + this.name + " now has a total of " + this.passengers + " passengers.")
    }
    else if(this.type === "dropoff"){
      if(this.passengers - this.p < 0){
        console.log("The " + this.name + " can't drop off " + this.p + " passengers when there's only " + this.passengers + " in vehicle!");
      }
      else{
        console.log("The " + this.name + " has dropped off " + this.p + " passengers.")
        this.passengers -= this.p;
        console.log("The " + this.name + " now has a total of " + this.passengers + " passengers.")
      }
    }
  }
  else{
    console.log("As far as I understand, you probably have enough passengers at " + this.passengers + " passengers.")
  }
  this.p = undefined;
  this.type = undefined;
};

vehicleConstructor.prototype.setNoise = function (noise){
  if(noise == undefined){
    console.log("Sound not passed to object for vehicle '" + this.name + ".'")
  }
  else{
    this.noise = noise;
  }
  return this
};

vehicleConstructor.prototype.makeNoise = function(){
  if(!this.noise){
    console.log("No sound set for " + this.name + "!")
  }
  else{
    console.log("The " + this.name + " made a '" + this.noise + "' sound as it passed by.")
  }
  return this
};

vehicleConstructor.prototype.pickUpPassengers = function(no_of_pass){
  this.p = no_of_pass;
  this.type = "pickup";
  this.passengerLogic();
  return this
};

vehicleConstructor.prototype.dropOffPassengers = function(no_of_pass){
  this.p = no_of_pass;
  this.type = "dropoff";
  this.passengerLogic();
  return this
};

var bike = new vehicleConstructor('bike', 2, 0, 10);
bike.setNoise("ring ring!").makeNoise().move().move().move().checkMiles()

var sedan = new vehicleConstructor('Sedan', 4, 5, 60);
sedan.setNoise("Honk Honk!").makeNoise().move().checkMiles()

var bus = new vehicleConstructor("bus", 6, 7, 50);
bus.pickUpPassengers(4).move().setNoise("Vroom vroom yo!").move().checkMiles()
