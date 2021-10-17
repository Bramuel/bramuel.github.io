function sacylinder() {
  type = document.getElementById("type").value
  unit = document.getElementById('unit').value
  pie = document.getElementById('pie').value
  d = document.getElementById('d').value
  h = document.getElementById('h').value
  
  if(pie == "22/7"){
    pie = 22/7
  }
  
  r = d / 2
  sa = ''
  if(type == "Open") {
    s = pie * r * r
    p = pie * d * h
    
    sa = s + p
  }else if(type == "Pipe"){
    p = pie * d * h
    sa = p
  }else{
    s = 2 * pie * r * r
    p = pie * d * h
    
    sa = s + p
  }
  alert(sa + unit + "³")
}
