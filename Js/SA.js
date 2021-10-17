function enter(){
  sa = document.getElementById("SA").value
  
  if(sa == "Home"){
    document.location.href = "/"
  }else if (sa == "Cube") {
    document.location.href = "cube.html"
  } else if (sa == "Cuboid") {
    document.location.href = "cuboid.html"
  } else if (sa == "Cylinder"){
    document.location.href = "cylinder.html"
  }
}
