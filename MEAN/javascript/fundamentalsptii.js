var person = {
  name: "Amy",
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



var add_me = function(x,y){
  var bignumber;
  var smallnumber;
  var sum = 0;
  if (x > y){
    bignumber = x;
    smallnumber = y;
  }
  else if (x < y) {
    bignumber = y;
    smallnumber = x;
  }
  else{
    // only if the numbers are equal
    return console.log(x)
  }
  for(var i = smallnumber; i <= bignumber; i++){
    sum += i;
  }
  return console.log(sum)
}
var minimum = function(arr){
  var min = arr[0];
  for(var i = 1; i < arr.length; i++){
    if(arr[i] < min){
      min = arr[i];
    }
  }
  return min
}
var averages = function(arr){
  var sum = arr[0]
  for(var i = 1; i < arr.length; i++){
    sum += arr[i];
  }
  return sum/arr.length
}

console.log("***As anonymous functions***")
add_me(6,1);
console.log(minimum([1,2,3,4,5,-1,5,100]))
console.log(averages([1,2,3,4,5,6,7,8,9,10]))
console.log("*************")

person.say_name();
person.say_something("I like puzzles!");
person.walk();
person.distance();
person.run();
person.distance();
person.crawl();
person.distance();
