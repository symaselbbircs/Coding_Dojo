function vehicleConstructor(name, wheels, pass){
  var vehicle = {};
  vehicle.name = name;
  vehicle.wheels = wheels;
  vehicle.passengers = pass;
  vehicle.makeNoise = function(noise){
    console.log("The " + vehicle.name + " made a '" + noise + "' sound as it passed by.")
  };
  vehicle.pickUpPassengers = function (passengers){
    if(vehicle.name === "bus"){
      console.log(vehicle.name + " has picked up " + passengers + " more passengers.")
      vehicle.passengers += passengers;
      console.log(vehicle.name + " now has a total of " + vehicle.passengers + " passengers.")
    }
  }
  vehicle.dropOffPassengers = function(passengers){
    if(vehicle.name === "bus"){
      console.log(vehicle.name + " has dropped off " + passengers + " passengers.")
      vehicle.passengers -= passengers;
      console.log(vehicle.name + " now has a total of " + vehicle.passengers + " passengers.")
    }
  }
  return vehicle
}


var bike = vehicleConstructor("bicycle", 2, 0);
bike.makeNoise("ring ring!")

var sedan = vehicleConstructor("Sedan", 4, 5);
sedan.makeNoise("Honk Honk!")

var bus = vehicleConstructor("bus",4,2);
bus.pickUpPassengers(4)
bus.makeNoise("HONK HONK HONK!")
bus.dropOffPassengers(4)
