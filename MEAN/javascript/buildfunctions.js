
runningLogger();
console.log("------");
console.log(multiplyByTen(5));
console.log("------");
console.log(stringReturnOne());
console.log("------");
console.log(stringReturnTwo());
console.log("------");

caller(5)
console.log("------");
var called = caller(function Caller(){console.log("this is a caller")});

function runningLogger(){
  console.log("I am running!")
}

var doublecall = myDoubleConsoleLog(function numberstuff(){return console.log(5)}, function wordstuff(){return "words!"})

function multiplyByTen(x){
  return x * 10
}

function stringReturnOne(){
  return "stringReturnOne"
}

function stringReturnTwo(){
  return "stringReturnTwo"
}

function caller(value){
  if(typeof(value) == "function"){
    return value()
  }
  else{
    return console.log(null)
  }
}

function myDoubleConsoleLog(value1, value2){
  console.log(caller2(function (){return value1}));
  // caller2(value2);
  if(typeof(value1) == "function" && typeof(value2) == "function"){
    console.log(value1());
    console.log(value2());
  }
  else{
    console.log(null)
  }
}

function caller2(value1){
  console.log("starting...");
  if(typeof(value1) == "function"){
    setTimeout(value1(), 2000);
  }
  console.log("ending")
  return "interesting"
}
