test.forEach(function(item,index){
  if (item%3==0){
      test[index] = test[index] + 100
  }else{
      console.log("Element "+item+" is not divisble by 3.")
  }
})

console.log(test)

for (var row = 0; row < donutBox.length; row++) {
  // here, donutBox[row].length refers to the length of the donut array currently being looped over
  for (var column = 0; column < donutBox[row].length; column++) {
    console.log(donutBox[row][column]);
  }
}