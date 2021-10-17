function sacube(){
  type = document.getElementById("type").value
  side = document.getElementById("side").value
  unit = document.getElementById('unit').value
  
  sa = ''
  if(type == "Open"){
    l = side * side * 2
    w = side * side * 2
    h = side * side
    
    sa = l + w + h
  }else{
    l = side * side * 2
    w = side * side * 2
    h = side * side * 2
    
    sa = l + w + h
  }
  alert(sa + unit + "³")
}
