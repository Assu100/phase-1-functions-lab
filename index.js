// Code your solution in this file!
// distance from Hq in blocks
function distanceFromHqInBlocks (someValue) {
    //returns the number of blocks given a value
    if (someValue<42){
      return(42-someValue);
    }
    else {
  
    return(someValue-42);
    }
  }
distanceFromHqInBlocks()  

// distance from Hq in feet
function distanceFromHqInFeet(someValue) {
    if(someValue<42){
        return (42-someValue) *264;
    }
    else {
        return (someValue-42) * 264;
    }
}

distanceFromHqInFeet()

// distance travelled in feet
function distanceTravelledInFeet(start, destination) {
    if (destination > start) {
        return (destination - start) * 264;
    }
    else {
        return (start - destination) * 264;
    }

}
distanceTravelledInFeet()

// calculate fare prices
function calculatesFarePrice(start,destination){
    let distance = distanceTravelledInFeet(start,destination);
    if (distance<= 400){
      return 0;
    }
    if (distance>=400 && distance<=2000){
      return (distance-400)* 0.02;
    }
    else if(distance>=2000&& distance<=2500){
      return 25;
    }
    else if (distance > 2500){
      return "cannot travel that far";
    }
  }

  calculatesFarePrice()