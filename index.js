// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']
const returnFirstTwoDrivers = function(){
 return drivers.slice(0,2);
   
}


 const returnLastTwoDrivers = function(){
     return drivers.slice(-2);
 }
//  function selectingDrivers(){
//     returnFirstTwoDrivers()
//     returnLastTwoDrivers()
// }
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
    return function(fare){
        return fare * multiplier
    
}
}
const fareDoubler = createFareMultiplier(2)


const fareTripler = createFareMultiplier(3)


const selectDifferentDrivers= function(drivers, selectingDrivers){
return selectingDrivers(drivers)
}