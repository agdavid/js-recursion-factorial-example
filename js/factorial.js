function factorial(number) {

  // //using loop, without recursion
  // var result = 1;

  // for (var count = number; count > 1; count--) {
  //   //print expression to confirm multiplied values
  //   console.log(result.toString() + ' * ' + count.toString());
  //   //multiply
  //   result *= count;
  //   //print result
  //   console.log(result.toString());
  // }

  // alert("The factorial of " + number.toString() + " is: " + result.toString());

  // //note: the drawback of this loop is the need for local variables

  //using recursion
  if (number <= 0) {
    return 1;
  } else {
    return number * factorial(number-1);
  }
    //if factorial(3)
      //first loop => 3 * factorial(2)
      //second loop => 3 * 2 * factorial(1)
      //third loop => 3 * 2 * 1 * factorial(0)
      //return => 3 * 2 * 1 * 1
}
