function go(){
  type = document.getElementById('select').value;
  unit = document.getElementById('unit').value;
  s = document.getElementById('side').value;

  var ans = ""
  
  if(type == "open"){
    a = s * s;
    a = a * 5;
    ans = a + unit + "²";
    document.getElementById("Answer").innerHTML = ans;
  }else if (type == "closed") {
  
  } else if (type == "hollow") {
  
  } else{
    
  }
}