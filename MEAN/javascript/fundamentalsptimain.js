function printall(x){
  for (i in x){
    console.log(x[i])
  }
}
function firstpart(){
  console.log("PART ONE")
  console.log("-----------")
  var x = [3,5,'Dojo', 'rocks', 'Michael', 'Sensei'];
  var otherx =  ["hello", "world", "JavaScript is Fun"]
  printall(x)
  x.push(100)
  x.push(otherx)
  printall(x)
}
function secondpart(){
  console.log("PART TWO");
  console.log("-----------");
  for (var i = 0; i<= 500; i++){
    console.log(i)
  }
}
function thirdpart(){
  console.log("PART THREE")
  console.log("-----------")
  var x = [1, 5, 90, 25, -3, 0];
  min = x[0]
  sum = x[0]
  for (i = 1; i < x.length; i++){
    sum += x[i];
    if (x[i] < min){
      min = x[i]
    }
  }
  avg = sum/x.length
  console.log("With x being the following array:")
  console.log(x)
  console.log("The minimum value is ", min)
  console.log("The average value is ", avg)
}
function fourthpart(){
  console.log("FOURTH PART")
  console.log("-----------")
  var new_ninja = {
    name: 'Jessica',
    profession: 'coder',
    favorite_language: 'JavaScript', //like that's even a question!
    dojo: 'Dallas'
    }
  for (var item in new_ninja){
    if (new_ninja.hasOwnProperty(item)){
      console.log(item)
      console.log(new_ninja[item])
    }
  }
}

firstpart()
secondpart()
thirdpart()
fourthpart()
