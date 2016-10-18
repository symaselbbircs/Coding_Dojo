// print 1-255
function print_array(){
  for(var i = 1; i <=255;i++){
    log.console(i);
  }
}

// print Odds 1-255
function print_odds(){
  for(var i = 1; i <=255;i+=2){
    log.console(i);
  }
}


// Print Ints and Sum 0-255
function print_sum(){
  var sum = 0;
  for(var i = 0; i <=255;i++){
    sum+=i;
    log.console(sum);
  }
}

// Iterate and Print Array
function print_arr(arr){
  for(var i = 0; i <arr.length;i++){
    log.console(arr[i]);
  }
}

//find and print Max
function max(arr){
  var max = 0
  for(var i = 0; i <arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
  }
  log.console(max);
}

//get and print average
function average(arr){
  var sum = 0
  for(var i = 0; i<arr.length; i++){
    sum += arr[i];
  }
  var avg = sum/arr.length;
  log.console(avg)
}

// array with odds
function createodd(){
  var arr = [];
  for(var i = 1; i<=255; i+=2){
    arr.push(i);
  }
  return arr;
}

//Square the values
function square_array(arr){
  var sq_arr = [];
  for(var i = 0; i<arr.length; i++){
    sq_arr.push(arr[i] * arr[i]);
  }
  return sq_arr;
}

// Greater than y
function average(arr, y){
  var count = 0;
  for(var i = 0; i<arr.length; i++){
    if(y > arr[i]){
      count++;
    }
  }
  log.console(count)
}

//Zero Out Negative numbers
function zeroneg(arr){
  for(var i = 0; i<arr.length; i++){
    if(arr[i] < 0){
      arr[i] = 0;
    }
  }
  return arr;
}

//Max, Min, Average
function max_min_average(arr){
  var results = [];
  var max = arr[0]
  var min = arr[0]
  var count = arr[0]
  for(var i = 1; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
    if(arr[i] < min){
      min = arr[i];
    }
    count += arr[i];
  }
  var avg = count/arr.length;
  log.console(max)
  log.console(min)
  log.console(avg)
}

//Shift array values
function shiftR(arr){
  var result = [];
  for(var i = 1; i< arr.length; i++){
    result.push(arr[i]);
  }
  result.push(0);
  return result;
}

// Swap String For Array Negative Values
function replacedojo(arr){
  for(var i = 0; i<arr.length; i++){
    if(arr[i] < 0){
      arr[i] = 'Dojo';
    }
  }
  return arr;
}
