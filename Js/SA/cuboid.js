function go() {
  type = document.getElementById('select').value;
  unit = document.getElementById('unit').value;
  le = document.getElementById('length').value;
  wi = document.getElementById('width').value;
  he = document.getElementById('height').value;
  
  if(type == "closed"){
    la = l * w * 2
    wa = w * h * 2
    ha = h * l * 2
    
    var ans = la + wa + ha
    document.getElementById('answer').innerHTML = ans + unit + "²"
  }else if (type == "open") {
    la = l * w * 1
    wa = w * h * 2
    ha = h * l * 2
  
    var ans = la + wa + ha
    document.getElementById('answer').innerHTML = ans + unit + "²"
  }else if (type == "hollow") {
    la = l * w * 0
    wa = w * h * 2
    ha = h * l * 2
  
    var ans = la + wa + ha
    document.getElementById('answer').innerHTML = ans + unit + "²"
  } else {
    document.getElementById('answer').innerHTML = "Error"
  }
}
