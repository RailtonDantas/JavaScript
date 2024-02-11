
var F = function fat(X){
  var res = 1
  for(var c = 1; c<=X; c++){
    res *= c
  }
  return res
}
console.log(F(6))