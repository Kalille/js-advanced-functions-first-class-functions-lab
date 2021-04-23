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

function createFareMultiplier(fare){
    return function(){
        return fare * 2
    
}
}