function vehicleConstructor(name, wheels, pass){
  var self = this;
  var name = name;
  var wheels = wheels;
  var passengers = pass;
  var p = undefined;
  var type = undefined;
  var passengerLogic = function(){
    if(name === "bus"){
      if(type === "pickup"){
        console.log(name + " has picked up " + p + " more passengers.")
        passengers += p;
        console.log(name + " now has a total of " + passengers + " passengers.")
      }
      else if(type === "dropoff"){
        console.log(name + " has dropped off " + p + " passengers.")
        passengers -= p;
        console.log(name + " now has a total of " + passengers + " passengers.")
      }
    }
    else{
      console.log(name + " can't pick up passengers!")
    }
    p = undefined;
    type = undefined;
  }

  this.makeNoise = function(noise){
    console.log("The " + name + " made a '" + noise + "' sound as it passed by.")
  };
  this.pickUpPassengers = function(no_of_pass){
    p = no_of_pass;
    type = "pickup";
    passengerLogic();
  }
  this.dropOffPassengers = function(no_of_pass){
    p = no_of_pass;
    type = "dropoff";
    passengerLogic();
  }
  this.whoami = function(){
    var vehicle = {
      name: name,
      wheels: wheels,
      passengers: passengers
    }
    console.log(vehicle)
  }
}


var bike = new vehicleConstructor("bicycle", 2, 0);
bike.makeNoise("ring ring!")
bike.whoami();
bike.pickUpPassengers(3);

var sedan = new vehicleConstructor("Sedan", 4, 5);
sedan.makeNoise("Honk Honk!")

var bus = new vehicleConstructor("bus",4,2);
bus.pickUpPassengers(4)
bus.makeNoise("HONK HONK HONK!")
bus.dropOffPassengers(4)
