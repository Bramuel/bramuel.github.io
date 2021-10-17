function sacuboid() {
  type = document.getElementById("type").value
  w = document.getElementById("w").value
  l = document.getElementById("l").value
  h = document.getElementById("h").value
  unit = document.getElementById('unit').value
  
  response = ''
  if (type == "Open") {
    ba = l * w
    wi = l * h * 2
    he = h * w * 2
    
    response = ba + wi + he
  }else {
    ba = l * w * 2
    wi = l * h * 2
    he = h * w * 2
    
    response = ba + wi + he
  }
  alert(response + unit + "³")
}
