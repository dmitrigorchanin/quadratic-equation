module.exports = function solveEquation(equation) {
  var regex_a = /^-?[0-9]*/;
  var regex_b = /[-|+]\s[0-9]*/;
  var regex_c = /[-|+]\s[0-9]*$/;
  var arr_a = regex_a.exec(equation);
  var arr_b = regex_b.exec(equation);
  var arr_c = regex_c.exec(equation);
  var temp_b = arr_b[0].split('');
  var temp_c = arr_c[0].split('');
  if (temp_b[0]=='-'){
      temp_b.splice(1, 1);
  }
  else {
      temp_b.splice(0, 2);
  }
  if (temp_c[0]=='-'){
      temp_c.splice(1, 1);
  }
  else {
      temp_c.splice(0, 2);
  }
  var a = arr_a[0];
  var b = temp_b.join('');
  var c = temp_c.join('');

  var x1 = ((-1)*b - Math.sqrt((b*b)-(4*a*c)))/(2*a);
  var x2 = ((-1)*b + Math.sqrt((b*b)-(4*a*c)))/(2*a);
  var solutions = []; 
  if (x1>x2){
    solutions.push(x2.toFixed(0));
    solutions.push(x1.toFixed(0));
  }
  else {
      solutions.push(x1.toFixed(0));
      solutions.push(x2.toFixed(0));
  }
  return solutions;
  }
