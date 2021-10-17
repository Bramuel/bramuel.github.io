function cal(){
  var fn = document.getElementById('fnum').value;
  var op = document.getElementById('op').value;
  var sn = document.getElementById('snum').value;
  fn = Number(fn);
  op = String(op);
  sn = Number(sn);
  
  var ans = '';
  
  if (op == '+') {
    ans = fn + sn;
  } else if (op == '-') {
    ans = fn - sn;
  } else if (op == 'x') {
    ans = fn * sn;
  } else if (op == '/') {
    ans = fn / sn;
  }else{
    ans = 'Invalid operator';
  }
  
  alert(ans);
}
