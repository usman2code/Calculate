


var a,b,result;


function setValues(){

a = Number(document.getElementById("a").value);
b = Number(document.getElementById("b").value);

}

function sum(){
  
  setValues();
  result = a+b;
  alert("The Sum Is Equals To Result" +result);

}

function rest(){
  
  setValues();
  result = a-b;
  alert("The rest Is Equals To Result" +result);

}

function mult(){
  
  setValues();
  result = a*b;
  alert("The Multiply Is Equals To Result" +result);

}

function devid(){
  
  setValues();
  result = a/b;
  alert("The devid Is Equals To Result" +result);

}