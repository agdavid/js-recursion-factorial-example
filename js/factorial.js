function Factorial(number) {

  //using loop, without recursion
  var result = 1;

  for (var count = number; count > 1; count--) {
    //print expression to confirm multiplied values
    console.log(result.toString() + ' * ' + count.toString());
    //multiply
    result *= count;
    //print result
    console.log(result.toString());
  }

  alert("The factorial of " + number.toString() + " is: " + result.toString());

  //note: the drawback of this loop is the need for local variables
}