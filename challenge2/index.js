// function declaration
function speeddetector(speed){
  const speedLimit = 70
  let points = 0
  // adding conditionals
  if (speed <= speedLimit){
    console.log("Ok")
  } else{
    points = Maths.abs((speed - speedLimit)/5) 
    if (points > 12) {
        console.log("License suspended")
   } else{
    console.log(`Points: ${points}`)
   }
  }

}
 