function main(){
  var example;
  var problem1;
  var problem2;
  var problem3;

  example = ex();
  problem1 = p1();
  problem2 = p2();
  problem3 = p3();

  function ex(){
    console.log("Example Problem")
    console.log("-----------")
    var hello = "interesting";
    function example() {
      var hello = "hi!";
      console.log(hello);
    }
    example();
    console.log(hello);
    console.log("****SOLUTION****")
    var hello;
    function example() {
      var hello;
      hello = "hi";
      console.log(hello);
    }
    //assignments and invocation maintain order
    hello = "interesting";
    example();
    console.log(hello);
    console.log("-----------")
  }

  function p1(){
    console.log("Problem 1");
    console.log("-----------")
    console.log(first_variable);
    var first_variable = "Yipee I was first!";
    function firstFunc() {
      first_variable = "Not anymore!!!";
      console.log(first_variable);
    }
    console.log(first_variable);
    console.log("****SOLUTION****")
    var second_variable;
    console.log(second_variable)
    function firstFunc(){
      first_variable = "Not anymore!!!";
      console.log(second_variable);
    }
    second_variable = "Yipee I was first!";
    console.log(second_variable)
    console.log("-----------")
    }

  function p2(){
    console.log("Problem 2");
    console.log("-----------")
    var food = "Chicken";
    function eat() {
      food = "half-chicken";
      console.log(food);
      var food = "gone";       // CAREFUL!
      console.log(food);
    }
    eat();
    console.log(food);
    console.log("****SOLUTION****")
    var food;
    function eat() {
      food = "half-chicken";
      console.log(food);
      var food = "gone";       // CAREFUL!
      console.log(food);
    }
    eat();
    food = "Chicken";
    console.log(food)
    }

  function p3(){
    console.log("Problem 3");
    console.log("-----------")
    var new_word = "NEW!";
    function lastFunc() {
      new_word = "old";
    }
    console.log(new_word);
    console.log("****SOLUTION****");
    var new_word;
    function lastFunc() {
      new_word = "old";
      }
    new_word = "NEW!";
    console.log(new_word)
    }
  }

main()
