const ageCalculator = function(name,yearOfBirth, currentYear){

  var age = currentYear - yearOfBirth;
  var text = ""
  text = text + name +" is "+age+" years old.";
  return text;

}

console.log(ageCalculator('Bob',1996,2020))