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
var Maths = /** @class */ (function () {
    function Maths(a, b) {
        this.math = {
            "+": function (a, b) {
                return a + b;
            },
            "-": function (a, b) {
                return a - b;
            },
            "*": function (a, b) {
                return a * b;
            },
            "/": function (a, b) {
                return a / b;
            }
        };
        this.a = a;
        this.b = b;
        this.c = prompt("Enter Choice [+,-,/,*] ");
        console.log(this.math[this.c](this.a, this.b));
    }
    return Maths;
}());
var k = new Maths(2, 4);
