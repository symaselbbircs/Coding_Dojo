function fib(){
  var a
  var b
  var tmp
  function nacci(){
    if(a === undefined){
      a = 1
      console.log(a)
    }
    else if(b === undefined){
      b = 1
      console.log(b)
    }
    else{
      tmp = a
      a = b
      b = tmp + b
      console.log(b)
    }
  }
  return nacci
}


var fibCounter = fib();

fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
