const howManyHundreds = function(num){

  var result = num / 100  //divided by 100
  var answer = Math.floor(result) //Math.floor where only return integer without rounded
  return answer

}

console.log(howManyHundreds(894), "=?", 8);