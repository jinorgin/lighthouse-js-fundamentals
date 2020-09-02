const whichSchool  = function (age) {
  //age is younger than 13
  if (age < 13){
    return "Elementary School";
  }//age is between 13 and 18
  else if(age >= 13 && age <= 18){
    return "Secondary School";
  }else //age is over 18
  {
    return "Lighthouse Labs";
  }
}
