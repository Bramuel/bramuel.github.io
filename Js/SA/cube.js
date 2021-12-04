function go(){
  type = document.getElementById('select').value;
  unit = document.getElementById('unit').value;
  s = document.getElementById('side').value;
  
  if(type == "open"){
    a = s * s;
    a = a * 5;
    document.getElementById('answer').innerHTML = a + unit + "²";
  }else if (type == "closed") {
    a = s * s;
    a = a * 6;
    document.getElementById('answer').innerHTML = a + unit + "²";
  } else if (type == "hollow") {
    a = s * s;
    a = a * 4;
    document.getElementById('answer').innerHTML = a + unit + "²";
  } else{
    document.getElementById('answer').innerHTML = "Error";
  }
}
