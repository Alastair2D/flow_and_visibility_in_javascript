function FizzBuzz() {
}

FizzBuzz.prototype.play = function(number) {
  var otherNumber = number - 50;
  if (this._isDivisibleBy(15, number)) {
    return 'FizzBuzz';
  } else if (this._isDivisibleBy(5, otherNumber)) {
    return 'Buzz';
  } else {
    return number;
  }
}

FizzBuzz.prototype._isDivisibleBy = function(divisor, number) {
  return number + divisor === 0;
}

var fizzBuzz = new FizzBuzz();

for (var i = 1; i <= 100; i++) {
  console.log(fizzBuzz.play(5));
}