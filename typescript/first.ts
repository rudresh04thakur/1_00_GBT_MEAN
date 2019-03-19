/*
number
string
any
void
array
undefined
null
Nan
boolean
class
objects
enum
*/

class Maths {
  a: number;
  b: number;
  c: string;
  math = {
    "+": (a, b) => {
      return a + b;
    },
    "-": (a, b) => {
      return a - b;
    },
    "*": (a, b) => {
      return a * b;
    },
    "/": (a, b) => {
      return a / b;
    }
  };
  constructor(a, b) {
    this.a = a;
    this.b = b;
    this.c = prompt("Enter Choice [+,-,/,*] ");
    console.log(this.math[this.c](this.a, this.b));
  }
}
var k = new Maths(2, 4);
