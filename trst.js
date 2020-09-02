const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations(stations){
  var result = [] 
for (const station of stations){
  const capacity = station[1]
  var name = station[0]
  const type = station[2]
  if(capacity >= 20){ //check to see if capacity is greater than or equal to 20.
    if(type === 'school' || type === 'community centre'){
      result.push(name);
    }
  }
  
}
return result;
}

console.log(chooseStations(stations))