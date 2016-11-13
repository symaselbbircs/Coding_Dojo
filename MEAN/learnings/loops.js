var ninja = {
  name: "Amy",
  MEAN_belt: 10,
  iOS_belt: 10,
  python_belt: 10,
  php_belt: 9,
  ruby_belt: 9.75
}

for (var key in ninja){
  if (ninja.hasOwnProperty(key)){
    console.log(key);
    console.log(ninja[key])
  }
}
