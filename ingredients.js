const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var i = 0;
var text1 = ""
var text2 = ""
var text3 = ""
while(ingredients[i]) {
  text1 += ingredients[i] + "\n";
  i++;
}
console.log(text1)


// Write a for loop that prints out the contents of ingredients:
for (i = 0; i < ingredients.length; i++) {
  text2 += ingredients[i] + "\n";
}
console.log(text2)


// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (i = ingredients.length - 1; i >= 0; i--) {
  text3 += ingredients[i] + "\n";
}
console.log(text3)
