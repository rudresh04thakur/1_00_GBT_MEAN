window.onload = function() {
  // var items = document.getElementsByClassName("item");
  // counter = 0;
  // while(1) {
  //   if (counter >= items.length) {
  //     counter = 0;
  //   }
  //   if (counter > 0) {
  //     items[counter - 1].style.zIndex = 0;
  //   } else {
  //     items[items.length - 1].style.zIndex = 0;
  //   }
  //   items[counter].style.zIndex = 999;
  //   var x = setInterval(function() {
  //     //items[counter].style.zIndex = 999;
  //     items[counter].style.left = items[0].offsetLeft + 1 + "px";
  //     if (items[counter].offsetLeft > window.screen.width) {
  //       clearInterval(x);
  //     }
  //   }, 1);
  //   if (counter >= items.length) {
  //     counter = 0;
  //   }
  //   counter++;
  // }

  function Employee(){} //It is Class and Constructor 
  Employee.prototype.name = "Gopal";
  Employee.prototype.print=function(){
    console.log(Employee.prototype.name)
  }
  Employee.prototype.getInfo=function(){
    Employee.prototype.name = prompt("Enter Name");
  }

  Office.prototype = Object.create(Employee.prototype);

  function Office(){
    Office.prototype.name = "Gopal";
    Office.prototype.o_print=function(){
      console.log(Office.prototype.name)
    }
    Office.prototype.o_getInfo=function(){
      Office.prototype.name = prompt("Enter Company Name");
    }
  }


  //var i = parseInt(prompt("Enter Number of Employees"));
  e = new Office();
  e.getInfo();
  e.o_getInfo();
  e.print();
  e.o_print();
};

